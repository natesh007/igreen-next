"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector2,
  Vector3,
  MeshPhysicalMaterial,
  Color,
  Object3D,
  InstancedMesh,
  PMREMGenerator,
  SphereGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  Raycaster,
  Plane,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { Mail, ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Three.js scene boilerplate ───────────────────────────────────────────────
class ThreeApp {
  private config: any;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private resizeTimer?: number;
  private animationFrameId: number = 0;
  private clock: Clock = new Clock();
  private animationState = { elapsed: 0, delta: 0 };
  private isAnimating: boolean = false;
  private isVisible: boolean = false;

  canvas: HTMLCanvasElement;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  size: any = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  onBeforeRender: (state: { elapsed: number; delta: number }) => void = () => {};
  onAfterResize: (size: any) => void = () => {};

  constructor(config: any) {
    this.config = config;
    this.canvas = this.config.canvas;
    this.camera = new PerspectiveCamera(50, 1, 0.1, 100);
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: "high-performance",
      alpha: true,
      antialias: true,
      ...(this.config.rendererOptions ?? {}),
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.canvas.style.display = "block";
    this.initObservers();
    this.resize();
  }

  private initObservers() {
    const parentEl =
      this.config.size === "parent" ? (this.canvas.parentNode as Element) : null;
    if (parentEl) {
      this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
      this.resizeObserver.observe(parentEl);
    } else {
      window.addEventListener("resize", this.handleResize.bind(this));
    }
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0 }
    );
    this.intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
  }

  private handleResize() {
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    const parentEl =
      this.config.size === "parent" ? (this.canvas.parentNode as HTMLElement) : null;
    const w = parentEl ? parentEl.offsetWidth : window.innerWidth;
    const h = parentEl ? parentEl.offsetHeight : window.innerHeight;
    this.size.width = w;
    this.size.height = h;
    this.size.ratio = w / h;
    this.camera.aspect = this.size.ratio;
    this.camera.updateProjectionMatrix();
    const fovRad = (this.camera.fov * Math.PI) / 180;
    this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.z;
    this.size.wWidth = this.size.wHeight * this.camera.aspect;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.onAfterResize(this.size);
  }

  private handleIntersection(e: IntersectionObserverEntry[]) {
    this.isAnimating = e[0].isIntersecting;
    this.isAnimating ? this.startAnimation() : this.stopAnimation();
  }

  private handleVisibilityChange() {
    if (this.isAnimating) {
      document.hidden ? this.stopAnimation() : this.startAnimation();
    }
  }

  private startAnimation() {
    if (this.isVisible) return;
    this.isVisible = true;
    this.clock.start();
    const f = () => {
      this.animationFrameId = requestAnimationFrame(f);
      this.animationState.delta = this.clock.getDelta();
      this.animationState.elapsed += this.animationState.delta;
      this.onBeforeRender(this.animationState);
      this.renderer.render(this.scene, this.camera);
    };
    f();
  }

  private stopAnimation() {
    if (this.isVisible) {
      cancelAnimationFrame(this.animationFrameId);
      this.isVisible = false;
      this.clock.stop();
    }
  }

  dispose() {
    this.stopAnimation();
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
    this.scene.clear();
    this.renderer.dispose();
  }
}

// ─── Physics engine ───────────────────────────────────────────────────────────
class BallPhysics {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3 = new Vector3();

  constructor(config: any) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count);
    this.velocityData = new Float32Array(3 * config.count);
    this.sizeData = new Float32Array(config.count);
    this.initPositions();
    this.setSizes();
  }

  private initPositions() {
    const { count, maxX, maxY, maxZ } = this.config;
    this.center.toArray(this.positionData, 0);
    for (let i = 1; i < count; i++) {
      const idx = 3 * i;
      this.positionData[idx] = MathUtils.randFloatSpread(2 * maxX);
      this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * maxY);
      this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * maxZ);
    }
  }

  setSizes() {
    const { count, size0, minSize, maxSize } = this.config;
    this.sizeData[0] = size0;
    for (let i = 1; i < count; i++) {
      this.sizeData[i] = MathUtils.randFloat(minSize, maxSize);
    }
  }

  update(deltaInfo: { delta: number }) {
    const { config, center, positionData, sizeData, velocityData } = this;
    const startIdx = config.controlSphere0 ? 1 : 0;
    if (config.controlSphere0) {
      new Vector3().fromArray(positionData, 0).lerp(center, 0.1).toArray(positionData, 0);
      new Vector3(0, 0, 0).toArray(velocityData, 0);
    }
    for (let i = startIdx; i < config.count; i++) {
      const base = 3 * i;
      const pos = new Vector3().fromArray(positionData, base);
      const vel = new Vector3().fromArray(velocityData, base);
      vel.y -= deltaInfo.delta * config.gravity * sizeData[i];
      vel.multiplyScalar(config.friction);
      vel.clampLength(0, config.maxVelocity);
      pos.add(vel);
      for (let j = i + 1; j < config.count; j++) {
        const otherBase = 3 * j;
        const otherPos = new Vector3().fromArray(positionData, otherBase);
        const diff = new Vector3().subVectors(otherPos, pos);
        const dist = diff.length();
        const sumRadius = sizeData[i] + sizeData[j];
        if (dist < sumRadius) {
          const overlap = (sumRadius - dist) * 0.5;
          diff.normalize();
          pos.addScaledVector(diff, -overlap);
          otherPos.addScaledVector(diff, overlap);
          pos.toArray(positionData, base);
          otherPos.toArray(positionData, otherBase);
        }
      }
      if (Math.abs(pos.x) + sizeData[i] > config.maxX) {
        pos.x = Math.sign(pos.x) * (config.maxX - sizeData[i]);
        vel.x *= -config.wallBounce;
      }
      if (pos.y - sizeData[i] < -config.maxY) {
        pos.y = -config.maxY + sizeData[i];
        vel.y *= -config.wallBounce;
      }
      if (Math.abs(pos.z) + sizeData[i] > config.maxZ) {
        pos.z = Math.sign(pos.z) * (config.maxZ - sizeData[i]);
        vel.z *= -config.wallBounce;
      }
      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }
  }
}

// ─── Instanced sphere mesh ────────────────────────────────────────────────────
const _dummy = new Object3D();

class InstancedSpheres extends InstancedMesh {
  config: any;
  physics: BallPhysics;
  ambientLight: AmbientLight;
  light: PointLight;

  constructor(renderer: WebGLRenderer, params: any) {
    const pmrem = new PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();
    const geometry = new SphereGeometry(1, 24, 24);
    const material = new MeshPhysicalMaterial({
      envMap: envTexture,
      ...params.materialParams,
    });
    super(geometry, material, params.count);
    this.config = params;
    this.physics = new BallPhysics(this.config);
    this.ambientLight = new AmbientLight(0xffffff, params.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(0xffffff, params.lightIntensity, 100, 1);
    this.add(this.light);
    this.setColors(this.config.colors);
  }

  setColors(colors: (string | Color)[]) {
    if (!Array.isArray(colors) || !colors.length) return;
    const colorObjs = colors.map((c) => (c instanceof Color ? c : new Color(c)));
    for (let i = 0; i < this.count; i++) this.setColorAt(i, colorObjs[i % colorObjs.length]);
    if (this.instanceColor) this.instanceColor.needsUpdate = true;
  }

  update(deltaInfo: { delta: number }) {
    this.physics.update(deltaInfo);
    for (let i = 0; i < this.count; i++) {
      _dummy.position.fromArray(this.physics.positionData, 3 * i);
      _dummy.scale.setScalar(this.physics.sizeData[i]);
      _dummy.updateMatrix();
      this.setMatrixAt(i, _dummy.matrix);
    }
    this.instanceMatrix.needsUpdate = true;
    if (this.config.controlSphere0) {
      this.light.position.fromArray(this.physics.positionData, 0);
    }
  }
}

// ─── Pointer tracking ─────────────────────────────────────────────────────────
const _pointer = new Vector2();
function handlePointerMove(e: PointerEvent) {
  _pointer.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
}

// ─── Defaults ─────────────────────────────────────────────────────────────────
const defaultBallpitConfig = {
  count: 200,
  materialParams: { metalness: 0.7, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.2 },
  minSize: 0.3,
  maxSize: 0.8,
  size0: 1.0,
  gravity: 0.4,
  friction: 0.995,
  wallBounce: 0.2,
  maxVelocity: 0.1,
  maxX: 10,
  maxY: 10,
  maxZ: 10,
  controlSphere0: true,
  followCursor: true,
  lightIntensity: 3,
  ambientIntensity: 1.5,
  colors: ["#1DBCD6", "#5CB85C", "#0A2535", "#0D1F15"] as (string | Color)[],
};

export type BallpitConfig = Partial<
  Omit<typeof defaultBallpitConfig, "materialParams" | "colors"> & {
    materialParams: Record<string, unknown>;
    colors: (string | Color)[];
  }
>;

// ─── Internal hook ────────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useBallpit(canvasRef: React.RefObject<HTMLCanvasElement | null>, config: any) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const three = new ThreeApp({ canvas, size: "parent" });
    three.renderer.toneMapping = ACESFilmicToneMapping;
    three.camera.position.set(0, 0, 20);

    const spheres = new InstancedSpheres(three.renderer, config);
    three.scene.add(spheres);

    const raycaster = new Raycaster();
    const plane = new Plane(new Vector3(0, 0, 1), 0);
    const intersectionPoint = new Vector3();

    if (config.followCursor) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    three.onBeforeRender = (deltaInfo) => {
      if (config.followCursor) {
        raycaster.setFromCamera(_pointer, three.camera);
        if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
          spheres.physics.center.copy(intersectionPoint);
        }
      }
      spheres.update(deltaInfo);
    };

    three.onAfterResize = (size) => {
      spheres.physics.config.maxX = size.wWidth / 2;
      spheres.physics.config.maxY = size.wHeight / 2;
      spheres.physics.config.maxZ = size.wWidth / 4;
    };

    return () => {
      if (config.followCursor) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      three.dispose();
    };
  }, [canvasRef, config]);
}

// ─── BallpitCanvas — standalone background layer ──────────────────────────────
// Drop inside any `relative overflow-hidden` section, same pattern as WovenCanvas / ShapesBackground.
export function BallpitCanvas({ ballpitConfig = {} }: { ballpitConfig?: BallpitConfig }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const config = useMemo(
    () => ({ ...defaultBallpitConfig, ...ballpitConfig }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useBallpit(canvasRef, config);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ─── InteractiveHero — full standalone hero page ──────────────────────────────
interface InteractiveHeroProps {
  brandName?: string;
  heroTitle?: string;
  heroDescription?: string;
  emailPlaceholder?: string;
  className?: string;
  ballpitConfig?: BallpitConfig;
}

export const InteractiveHero: React.FC<InteractiveHeroProps> = ({
  brandName = "NEXUS",
  heroTitle = "Innovation Meets Simplicity",
  heroDescription = "Discover cutting-edge solutions designed for the modern digital landscape.",
  emailPlaceholder = "your@email.com",
  className,
  ballpitConfig = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const config = useMemo(
    () => ({ ...defaultBallpitConfig, ...ballpitConfig }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useBallpit(canvasRef, config);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className={cn("relative w-full h-screen overflow-hidden bg-[#0A0F1C]", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <header className="relative z-10 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="font-bold text-2xl text-white tracking-tight">
            {brandName}
          </a>
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white px-3 py-2 transition-colors rounded-md">About</a>
            <a href="#" className="hover:text-white px-3 py-2 transition-colors rounded-md">Blog</a>
            <a href="#" className="hover:text-white px-3 py-2 transition-colors rounded-md">Contact</a>
          </nav>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      <main className="relative z-10 flex h-[calc(100%-100px)] items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tighter">
            {heroTitle}
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">{heroDescription}</p>
          <form
            onSubmit={handleEmailSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 text-white placeholder-gray-500 font-medium pl-11 pr-4 py-3 rounded-full focus:outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2 flex-shrink-0"
            >
              Get Notified <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </main>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-20">
          <div className="absolute top-24 right-8 p-4 bg-[#111827] border border-[#1F2937] shadow-lg rounded-xl w-48">
            <nav className="flex flex-col gap-2 text-gray-400 font-medium">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white px-3 py-2 text-sm transition-colors rounded-lg">About</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white px-3 py-2 text-sm transition-colors rounded-lg">Blog</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white px-3 py-2 text-sm transition-colors rounded-lg">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

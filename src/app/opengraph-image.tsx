import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'iGreen Systems — IoT Solutions & Digital Transformation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            height: 500,
            background: 'radial-gradient(ellipse, #1DBCD618 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Corner accent lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #1DBCD6, #5CB85C, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #5CB85C, #1DBCD6, transparent)',
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 36,
            boxShadow: '0 0 40px #1DBCD640',
          }}
        >
          <span
            style={{
              color: '#ffffff',
              fontSize: 56,
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            i
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            iGreen
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#1DBCD6',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            Systems
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#9CA3AF',
            marginBottom: 44,
            letterSpacing: 1,
          }}
        >
          IoT Solutions & Digital Transformation
        </div>

        {/* Divider */}
        <div
          style={{
            width: 240,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #1DBCD680, transparent)',
            marginBottom: 28,
          }}
        />

        {/* Location */}
        <div
          style={{
            fontSize: 20,
            color: '#4B5563',
            letterSpacing: 3,
          }}
        >
          HYDERABAD · KAKINADA · INDIA · SINCE 2008
        </div>
      </div>
    ),
    { ...size }
  );
}

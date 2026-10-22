import Link from 'next/link';
import { iotServices, deliveryServices } from './data';

function Card({ s, n, kind }: { s: { href: string; title: string; desc: string }; n: number; kind: 'iot' | 'del' }) {
  return (
    <Link className={`v-card v-brut ${kind} v-rv`} href={s.href}>
      <div>
        <span className="n">{String(n).padStart(2, '0')}</span>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
      <span className="go" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function Solutions() {
  return (
    <section className="v-w v-sec" id="solutions" style={{ paddingTop: 0 }} aria-labelledby="sol-h">
      <div className="v-sh">
        <h2 className="v-disp" id="sol-h">
          What we build
        </h2>
        <p>From sensors and gateways to enterprise software and system integrations.</p>
      </div>
      <h3 className="v-grp">IoT &amp; digital</h3>
      <div className="v-svc five">
        {iotServices.map((s, i) => (
          <Card key={s.href} s={s} n={i + 1} kind="iot" />
        ))}
      </div>
      <h3 className="v-grp">Digital delivery</h3>
      <div className="v-svc">
        {deliveryServices.map((s, i) => (
          <Card key={s.href} s={s} n={i + 6} kind="del" />
        ))}
      </div>
    </section>
  );
}

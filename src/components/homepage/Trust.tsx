import Image from 'next/image';
import { stats, quotes, clientLogos } from './data';

export default function Trust() {
  return (
    <section className="v-w v-sec" id="trust" aria-labelledby="trust-h">
      <div className="v-sh">
        <h2 className="v-disp" id="trust-h">
          Trusted in the field
        </h2>
        <p>Eighteen years of shipping systems that run in real buildings, plants and platforms.</p>
      </div>

      <div className="v-stats">
        {stats.map((s) => (
          <div className="v-stat v-brut v-rv" key={s.label}>
            <b data-n={s.n} data-s={s.suffix}>
              {s.n}
              {s.suffix}
            </b>
            <span>{s.label}</span>
            <i>
              <u data-w={s.fill} />
            </i>
          </div>
        ))}
      </div>

      {clientLogos.length > 0 && (
        <div className="v-logos" aria-label="Clients">
          {clientLogos.map((l) => (
            <Image key={l.src} src={l.src} alt={l.alt} width={l.width} height={l.height} />
          ))}
        </div>
      )}

      <div className="v-quotes">
        {quotes.map((q) => (
          <figure className="v-quote v-brut v-rv" key={q.name}>
            <blockquote style={{ margin: 0 }}>
              <p>“{q.text}”</p>
            </blockquote>
            <figcaption>
              <b>{q.name}</b>
              <small>{q.role}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

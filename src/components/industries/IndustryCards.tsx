import Image from 'next/image';
import Link from 'next/link';
import type { Industry } from './data';

/** Photo cards linking to each industry page. */
export default function IndustryCards({ items }: { items: Industry[] }) {
  return (
    <div className="v-pgrid">
      {items.map((i) => (
        <Link className="v-pcard v-brut v-rv" href={`/industries/${i.slug}`} key={i.slug}>
          <Image src={i.photo} alt={i.alt} width={900} height={675} sizes="(min-width: 1100px) 22vw, (min-width: 640px) 45vw, 92vw" />
          <span className="shade" aria-hidden="true" />
          <span className="label">
            <span className="dot" style={{ background: i.dot }} aria-hidden="true" />
            <strong>{i.title}</strong>
            <em>{i.sub}</em>
          </span>
          <span className="go" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

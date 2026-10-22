import Link from 'next/link';
import { industries } from '@/components/industries/data';
import IndustryCards from '@/components/industries/IndustryCards';

export default function Industries() {
  return (
    <section className="v-w v-sec" id="industries" aria-labelledby="ind-h">
      <div className="v-sh">
        <h2 className="v-disp" id="ind-h">
          Solutions by industry
        </h2>
        <p>Pick your industry to see what we have built and the results it delivered.</p>
      </div>
      <IndustryCards items={industries} />
      <p style={{ marginTop: 24 }}>
        <Link className="v-btn alt" href="/industries">
          All industries →
        </Link>
      </p>
    </section>
  );
}

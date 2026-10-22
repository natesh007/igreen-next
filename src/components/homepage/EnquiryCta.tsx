import Image from 'next/image';
import EnquiryForm from './EnquiryForm';

export default function EnquiryCta() {
  return (
    <section className="v-cta" id="enquire" aria-labelledby="enq-h">
      {/* real photo, washed with the brand gradient; the sketch is only a faint hint */}
      <Image className="photo" src="/images/home/photo-pipes.webp" alt="" width={1400} height={788} sizes="100vw" />
      <Image className="ink" src="/images/home/ink-pipes.webp" alt="" width={760} height={428} sizes="100vw" />
      <div>
        <span className="v-chip" style={{ background: '#fff' }}>
          Ready when you are
        </span>
        <h2 className="v-disp" id="enq-h" style={{ marginTop: '0.4em' }}>
          Discuss your project with our engineers.
        </h2>
        <p className="sub">
          If you need an IoT platform, web application, mobile app or cloud solution that actually ships — tell us what you need and
          we will reply within one business day.
        </p>
      </div>
      <EnquiryForm />
    </section>
  );
}

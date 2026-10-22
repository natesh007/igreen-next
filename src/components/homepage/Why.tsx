import { why } from './data';

export default function Why() {
  return (
    <section className="v-w v-sec" id="why" style={{ paddingTop: 0 }} aria-labelledby="why-h">
      <div className="v-sh">
        <h2 className="v-disp" id="why-h">
          Why iGreen
        </h2>
        <p>What we have actually deployed, and where.</p>
      </div>
      <div className="v-why">
        {why.map((w, i) => (
          <div key={w.title}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
            <div className="proof">
              <b>{w.stat}</b>
              <span>{w.statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

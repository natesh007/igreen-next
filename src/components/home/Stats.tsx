const stats = [
  { value: '12+', label: 'Years of Experience', desc: 'Over a decade building technology solutions' },
  { value: '25', label: 'Team Members', desc: 'Engineers, designers, and consultants' },
  { value: '232+', label: 'Happy Clients', desc: 'From startups to global enterprises' },
  { value: '521+', label: 'Projects Delivered', desc: 'Across IoT, web, mobile, and cloud' },
];

export default function Stats() {
  return (
    <section className="py-20" style={{ backgroundColor: '#060A12' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center p-8 rounded-2xl border"
              style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
            >
              <p
                className="text-5xl font-bold mb-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: i % 2 === 0 ? '#1DBCD6' : '#5CB85C',
                }}
              >
                {s.value}
              </p>
              <p className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {s.label}
              </p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

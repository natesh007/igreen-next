import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with iGreen Systems for IoT solutions, digital transformation projects, and technology consulting in Hyderabad and Kakinada.',
};

const offices = [
  {
    city: 'Hyderabad',
    address: '#1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur, Hyderabad, Telangana 500081, India.',
    phones: ['+91 9849481081', '+91 9676067666'],
  },
  {
    city: 'Kakinada',
    address: '4/52-2, Sita Enclave, Rama Reddy Nagar, Pratap Nagar Bridge, Kakinada, Andhra Pradesh 533004, India.',
    phones: ['+91 9849481081', '+91 9676067666'],
  },
];

const phoneIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const emailIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const locationIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ backgroundColor: '#060A12' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #1DBCD610 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto px-4 relative">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              Contact Us
            </p>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-gray-400 text-lg">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-10" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border h-full transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_20px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ color: '#1DBCD6' }}>{locationIcon}</span>
                    <p className="font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {o.city}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{o.address}</p>
                  {o.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-1"
                    >
                      <span className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#5CB85C' }}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </span>
                      {p}
                    </a>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <Reveal>
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Get in Touch
                </h2>

                <a
                  href="mailto:contact@igreensystems.com"
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-[#1DBCD640] hover:shadow-[0_0_16px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <span style={{ color: '#1DBCD6' }}>{emailIcon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm mt-0.5">contact@igreensystems.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919849481081"
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-[#1DBCD640] hover:shadow-[0_0_16px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <span style={{ color: '#1DBCD6' }}>{phoneIcon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                    <p className="text-white text-sm mt-0.5">+91 9849481081</p>
                    <p className="text-white text-sm">+91 9676067666</p>
                  </div>
                </a>

                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <p className="text-sm font-semibold text-white mb-2">Response Time</p>
                  <p className="text-sm text-gray-400">
                    We respond to all inquiries within{' '}
                    <span style={{ color: '#5CB85C' }}>1 business day</span>.
                    For urgent matters, mention it in your message.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.12} className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span style={{ color: '#1DBCD6' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors"
                      style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span style={{ color: '#1DBCD6' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors"
                      style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-colors"
                    style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
                  >
                    <option value="">Select a topic...</option>
                    <option>IoT Solutions</option>
                    <option>Digital Transformation</option>
                    <option>Web / Mobile Development</option>
                    <option>Cloud Solutions</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span style={{ color: '#1DBCD6' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors resize-none"
                    style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto px-10 py-3.5 rounded-xl text-base">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

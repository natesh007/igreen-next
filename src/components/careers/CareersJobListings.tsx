'use client';

import { useState } from 'react';
import ApplyModal from './ApplyModal';

const openings = [
  {
    title: 'IoT Solutions Engineer',
    type: 'Full-time',
    location: 'On-site / Hybrid',
    dept: 'Engineering',
    desc: 'Design and implement end-to-end IoT architectures including sensor integration, edge processing, and cloud connectivity.',
  },
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'On-site / Remote',
    dept: 'Engineering',
    desc: 'Build scalable web applications using React, Next.js, and Node.js with a strong focus on performance and developer experience.',
  },
  {
    title: 'Digital Transformation Consultant',
    type: 'Full-time',
    location: 'On-site',
    dept: 'Consulting',
    desc: 'Work directly with enterprise clients to assess, plan, and execute their digital transformation journey.',
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Hybrid',
    dept: 'Engineering',
    desc: 'Develop high-quality iOS and Android applications using React Native and native frameworks.',
  },
];

export default function CareersJobListings() {
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null);

  return (
    <>
      {/* Open Positions */}
      <section className="py-16" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-white mb-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl p-7 border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: '#1DBCD620', color: '#1DBCD6' }}
                      >
                        {job.dept}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-semibold text-white mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <span style={{ color: '#5CB85C' }}>●</span> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <span style={{ color: '#5CB85C' }}>●</span> {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob({ title: job.title })}
                    className="flex-shrink-0 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Open Application CTA */}
          <div
            className="mt-10 rounded-2xl p-8 text-center border"
            style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
          >
            <p className="text-white font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Don&apos;t see a role that fits?
            </p>
            <p className="text-gray-400 text-sm mb-5">
              We&apos;re always open to exceptional talent. Send us your resume and we&apos;ll keep
              you in mind.
            </p>
            <button
              onClick={() => setSelectedJob({ title: 'Open Application' })}
              className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all hover:bg-white/5"
              style={{ borderColor: '#374151', color: '#D1D5DB' }}
            >
              Send Open Application
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}

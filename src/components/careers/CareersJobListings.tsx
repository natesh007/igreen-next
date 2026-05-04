'use client';

import { useState } from 'react';
import ApplyModal from './ApplyModal';

interface Section {
  heading: string;
  items: string[];
}

interface Opening {
  title: string;
  type: string;
  location: string;
  dept: string;
  experience: string;
  desc: string;
  about: string;
  sections: Section[];
}

const openings: Opening[] = [
  {
    title: 'Flutter Developer (Android & iOS)',
    type: 'Full-Time',
    location: 'Hybrid (Remote + On-site)',
    dept: 'Engineering',
    experience: '0–2+ years',
    desc: 'Build and enhance cross-platform mobile applications using Flutter for both Android and iOS, from integration to App Store deployment.',
    about:
      'We are looking for a proactive Flutter Developer who can take ownership of mobile application development—both enhancing existing applications and building new ones from scratch. The ideal candidate should be capable of working independently, quickly understanding existing codebases, and delivering production-ready apps from day one.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Understand, analyze, and enhance existing Flutter codebases',
          'Develop mobile applications from scratch using Flutter',
          'Build, test, and deploy applications for both Android and iOS platforms',
          'Integrate APIs and third-party services into mobile applications',
          'Implement and manage push notifications',
          'Work with Firebase services (Authentication, Firestore/Realtime DB, Cloud Messaging, etc.)',
          'Ensure performance, quality, and responsiveness of applications',
          'Debug, troubleshoot, and optimize applications',
          'Handle publishing of apps on Google Play Store and Apple App Store',
          'Collaborate with internal teams when required',
        ],
      },
      {
        heading: 'Required Skills & Qualifications',
        items: [
          'Strong knowledge of Flutter (Dart)',
          'Ability to understand and work with existing codebases',
          'Capability to independently develop and deploy mobile apps',
          'Knowledge of Android & iOS app publishing process',
          'Hands-on experience with Firebase (FCM, Firestore, Authentication, etc.)',
          'Experience in Push Notifications integration',
          'Understanding of REST APIs and third-party integrations',
          'Familiarity with Git / version control systems',
          'Basic understanding of mobile UI/UX principles',
          'Good debugging and problem-solving skills',
        ],
      },
      {
        heading: 'Good to Have',
        items: [
          'Knowledge of state management (Provider, Riverpod, Bloc, etc.)',
          'Exposure to CI/CD for mobile apps',
          'Understanding of performance optimization',
        ],
      },
      {
        heading: 'Soft Skills',
        items: [
          'Ability to work independently with minimal supervision',
          'Strong ownership mindset',
          'Clear communication and reporting',
          'Proactive and solution-oriented approach',
        ],
      },
    ],
  },
  {
    title: 'Digital Transformation Consultant',
    type: 'Full-Time',
    location: 'Hybrid (Remote + On-site)',
    dept: 'Consulting',
    experience: '0–3+ years',
    desc: 'Identify businesses relying on manual processes, engage decision-makers, and convert operational challenges into digital transformation opportunities.',
    about:
      'We are looking for a sharp, business-minded professional who can identify organizations still dependent on manual or semi-digital processes and help them transition toward digital solutions. This role combines business development with consultative selling—understanding industry pain points and converting them into meaningful opportunities.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Identify industries and businesses relying on manual processes, paperwork, or basic tools like Excel',
          'Research and map potential target segments for digital transformation',
          'Engage with decision-makers to understand operational challenges',
          'Position digital solutions that improve efficiency, automation, and scalability',
          'Generate and qualify leads, converting them into business opportunities',
          'Conduct discovery calls, meetings, and presentations',
          'Collaborate with technical teams to align solutions with client needs',
          'Maintain a structured pipeline of prospects and follow-ups',
          'Drive end-to-end lead conversion from identification to closure support',
        ],
      },
      {
        heading: 'Required Qualifications',
        items: [
          'BBA / MBA (or equivalent in Business, Marketing, or related fields)',
          'Strong communication and interpersonal skills',
          'Basic understanding of digital technologies, automation, or software solutions',
          'Ability to independently research and approach new industries',
          'Good presentation and persuasion skills',
        ],
      },
      {
        heading: 'Good to Have',
        items: [
          'Exposure to CRM tools and lead management systems',
          'Understanding of SaaS, ERP, or automation tools',
          'Prior experience in sales, consulting, or business development',
        ],
      },
      {
        heading: 'Key Skills',
        items: [
          'Consultative selling',
          'Lead generation & qualification',
          'Industry research & market mapping',
          'Business communication',
          'Problem-solving mindset',
        ],
      },
      {
        heading: 'What Success Looks Like',
        items: [
          'Ability to consistently identify high-potential industries',
          'Converting conversations into qualified leads',
          'Building a strong pipeline of transformation opportunities',
        ],
      },
    ],
  },
];

function JobCard({
  job,
  onApply,
}: {
  job: Opening;
  onApply: (title: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      {/* Always-visible header */}
      <div className="p-7">
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
              <span className="flex items-center gap-1">
                <span style={{ color: '#5CB85C' }}>●</span> {job.experience}
              </span>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 flex-shrink-0">
            <button
              onClick={() => onApply(job.title)}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
            >
              Apply Now
            </button>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-sm font-medium transition-colors"
              style={{ color: '#1DBCD6' }}
            >
              {expanded ? 'View less ↑' : 'View more ↓'}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable details */}
      {expanded && (
        <div
          className="px-7 pb-7 border-t"
          style={{ borderColor: '#1F2937' }}
        >
          <p className="text-sm text-gray-300 leading-relaxed mt-6 mb-6">{job.about}</p>
          <div className="space-y-5">
            {job.sections.map((section) => (
              <div key={section.heading}>
                <h4
                  className="text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {section.heading}
                </h4>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1DBCD6' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareersJobListings() {
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null);

  return (
    <>
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
              <JobCard key={job.title} job={job} onApply={(title) => setSelectedJob({ title })} />
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

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}

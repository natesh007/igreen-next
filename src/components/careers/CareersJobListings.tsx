'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplyModal from './ApplyModal';
import { Reveal } from '@/components/ui/Reveal';

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
    title: 'Technology Solutions Associate',
    type: 'Internship / Full-Time',
    location: 'Hybrid (Remote + On-site)',
    dept: 'Sales & Marketing',
    experience: 'Freshers welcome',
    desc: 'Learn our SaaS, IoT and digital products, identify prospective customers, and explain how our solutions solve their business problems.',
    about:
      'As a Technology Solutions Associate, you will learn about our digital products, identify potential customers, understand their business requirements, and explain how our solutions can help solve their problems. You will work closely with our team to develop your skills in technology sales, customer communication, product demonstrations, and business development.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          "Learn about iGreen's SaaS products, IoT solutions, and digital platforms",
          'Research organizations, industries, and potential customers who may benefit from our products',
          'Identify prospective customers and generate business leads',
          'Contact potential customers through email, telephone, LinkedIn, and other channels',
          'Understand customer challenges and identify opportunities where our products can help',
          'Explain product features and business benefits in simple language',
          'Assist in preparing product presentations, proposals, and demonstrations',
          'Schedule meetings and follow up with prospective customers',
          'Support sales and marketing campaigns to promote our digital products',
          'Maintain customer information, leads, and follow-up activities in a sales tracker or CRM',
          'Work with the technical team to understand product capabilities and customer requirements',
        ],
      },
      {
        heading: 'Who Can Apply?',
        items: [
          'Fresh graduates or students looking for an internship in technology sales and marketing',
          'Candidates from IT, Computer Science, Engineering, Business Administration, Marketing, or related backgrounds',
          'Candidates interested in learning about SaaS products, IoT, enterprise software, and digital technologies',
          'Candidates with good communication skills and a willingness to interact with customers',
          'Candidates who are proactive, curious, confident, and willing to learn',
        ],
      },
      {
        heading: 'Skills We Value',
        items: [
          'Good verbal and written communication',
          'Interest in technology and business',
          'Basic understanding of software applications, websites, mobile apps, or cloud-based platforms',
          'Ability to research companies and identify potential business opportunities',
          'Confidence in speaking with new people and building relationships',
          'Willingness to learn sales techniques, product demonstrations, and customer engagement',
          'A positive attitude, persistence, and a target-oriented mindset',
          'Prior sales experience is not mandatory. Coding skills are not required',
        ],
      },
      {
        heading: 'What You Will Learn',
        items: [
          'How SaaS and IoT products work and deliver business value',
          'How technology solutions are sold to organizations and industries',
          'B2B sales, lead generation, prospecting, and customer relationship management',
          'How to conduct product presentations and communicate with business decision-makers',
          'How to manage sales opportunities and contribute to revenue generation',
        ],
      },
      {
        heading: 'Performance Expectations',
        items: [
          'During the internship or initial training period: learn our products, research target markets, generate leads, initiate customer conversations, and assist in product presentations',
          'As you gain experience: gradually take responsibility for managing prospects, following up on opportunities, and contributing to sales closures',
          'We value learning ability, initiative, consistency, and willingness to take ownership',
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
    <motion.div
      className="rounded-2xl"
      whileHover={{ boxShadow: '0 0 28px #1DBCD625' }}
      transition={{ duration: 0.22 }}
    >
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
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CareersJobListings() {
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null);

  return (
    <>
      <section className="py-16" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Open Positions
            </h2>
          </Reveal>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.1}>
                <JobCard job={job} onApply={(title) => setSelectedJob({ title })} />
              </Reveal>
            ))}
          </div>

          {/* Open Application CTA */}
          <Reveal delay={0.2} className="mt-10">
            <div
              className="rounded-2xl p-8 text-center border"
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
          </Reveal>
        </div>
      </section>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}

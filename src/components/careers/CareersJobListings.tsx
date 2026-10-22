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

function JobCard({ job, onApply }: { job: Opening; onApply: (title: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const id = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <article className="v-job v-brut iot v-rv">
      <div className="top">
        <div>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            {job.dept}
          </span>
          <h3>{job.title}</h3>
          <p>{job.desc}</p>
          <ul className="facts">
            <li>{job.type}</li>
            <li>{job.location}</li>
            <li>{job.experience}</li>
          </ul>
        </div>
        <div className="actions">
          <button type="button" className="v-btn" onClick={() => onApply(job.title)}>
            Apply now
          </button>
          <button type="button" className="v-btn alt" aria-expanded={expanded} aria-controls={`${id}-details`} onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'View less ↑' : 'View more ↓'}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="details" id={`${id}-details`}>
          <p>{job.about}</p>
          {job.sections.map((section) => (
            <div key={section.heading}>
              <h4>{section.heading}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function CareersJobListings() {
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null);

  return (
    <>
      <section className="v-w v-sec" id="open-roles" style={{ paddingTop: 0 }} aria-labelledby="roles-h">
        <div className="v-sh">
          <h2 className="v-disp" id="roles-h">
            Open positions
          </h2>
        </div>
        <div className="v-jobs">
          {openings.map((job) => (
            <JobCard key={job.title} job={job} onApply={(title) => setSelectedJob({ title })} />
          ))}
        </div>

        <div className="v-brut v-rv v-brief" style={{ marginTop: 'clamp(16px, 2vw, 28px)' }}>
          <div>
            <h3 className="v-disp" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', marginBottom: 8 }}>
              Don&apos;t see a role that fits?
            </h3>
            <p>We&apos;re always open to exceptional talent. Send us your resume and we&apos;ll keep you in mind.</p>
          </div>
          <button type="button" className="v-btn alt" onClick={() => setSelectedJob({ title: 'Open Application' })}>
            Send open application
          </button>
        </div>
      </section>

      {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </>
  );
}

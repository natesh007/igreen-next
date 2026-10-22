import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms for using the iGreen Systems & Technologies website, igreensystems.com, including acceptable use, intellectual property, disclaimers and governing law.',
  alternates: { canonical: '/useful-links/terms-of-service' },
};

const mail = <a href="mailto:contact@igreensystems.com">contact@igreensystems.com</a>;

const sections: LegalSection[] = [
  {
    id: 'about',
    title: 'About these terms',
    body: (
      <>
        <p>
          These terms govern your use of the website igreensystems.com (the &ldquo;Site&rdquo;), operated by iGreen Systems &amp; Technologies
          (&ldquo;iGreen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the Site you agree to them. If you do not agree, please do not use the Site.
        </p>
        <p>
          The work we do for clients (software, IoT platforms, apps and support) is governed by a separate written agreement or proposal with
          that client. If these terms conflict with a signed agreement, the signed agreement applies to that work.
        </p>
      </>
    ),
  },
  {
    id: 'information',
    title: 'Information on the Site',
    body: (
      <p>
        The Site describes our company, services and projects for general information. We take care to keep it accurate, but it may contain errors
        or become out of date, and nothing on it is a binding offer, quotation or professional advice. Project descriptions, figures and
        testimonials reflect our work for specific clients and do not guarantee the same results elsewhere. Some images are illustrative and are
        labelled as such.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Site in a way that is unlawful, harmful, or infringes anyone&apos;s rights;</li>
          <li>try to gain unauthorised access to the Site, our servers, or other users&apos; data, or probe or test their security;</li>
          <li>introduce malware, or send automated, excessive or spam requests, including through our forms;</li>
          <li>scrape or copy substantial parts of the Site for commercial use without our written permission;</li>
          <li>submit information that is false, misleading or belongs to someone else without their permission.</li>
        </ul>
        <p>We may block access to the Site if we reasonably believe these rules are being broken.</p>
      </>
    ),
  },
  {
    id: 'submissions',
    title: 'Enquiries and job applications',
    body: (
      <p>
        When you send us an enquiry or an application, you confirm that the information is yours to share and is accurate. Sending an enquiry does
        not create a contract or a client relationship, and applying for a role does not guarantee an interview or an offer. We use what you send
        us as described in our{' '}
        <a href="/useful-links/privacy-policy">Privacy Policy</a>. Please do not include confidential or sensitive information in a general
        enquiry; if you need to share it, ask us for an NDA first.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <p>
        The Site&apos;s design, text, graphics, logos and code are owned by iGreen or used with permission, and are protected by intellectual property
        laws. Client names, product names and logos belong to their owners and appear for identification only. You may view and print pages for your
        own non-commercial use, and share a link to them. You may not copy, modify, redistribute or reuse our materials, or imply any partnership
        with us, without our prior written permission.
      </p>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services and links',
    body: (
      <p>
        The Site relies on services from third parties, such as hosting, email, Google reCAPTCHA and analytics, and may link to other websites. We do
        not control them and are not responsible for their content, availability or practices. Use of those services is governed by their own terms.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability',
    body: (
      <p>
        We try to keep the Site available, but we do not promise that it will be uninterrupted or error-free. We may change, suspend or remove any
        part of it at any time, including for maintenance or security reasons.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body: (
      <p>
        To the fullest extent permitted by law, the Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
        warranties of any kind, whether express or implied, including accuracy, fitness for a particular purpose and non-infringement.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        To the fullest extent permitted by law, iGreen and its directors, employees and partners are not liable for any indirect, incidental or
        consequential loss, or for loss of profit, data or business, arising from your use of, or inability to use, the Site or from relying on its
        content. Nothing in these terms limits liability that cannot be limited by law.
      </p>
    ),
  },
  {
    id: 'indemnity',
    title: 'Your responsibility',
    body: (
      <p>
        You are responsible for what you submit through the Site and for your own use of it. You agree to compensate us for losses we suffer
        because you broke these terms or the law.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of India. The courts at Hyderabad, Telangana have exclusive jurisdiction over any dispute arising
        from them or from your use of the Site, unless the law requires otherwise.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;last updated&rdquo; date above shows the current version. By continuing to use the
        Site after a change, you accept the updated terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <p>
        <strong>iGreen Systems &amp; Technologies</strong>
        <br />
        #1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur, Hyderabad, Telangana 500081, India
        <br />
        Email: {mail}
        <br />
        Phone: <a href="tel:+919849481081">+91 984 948 1081</a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="22 October 2026"
      intro="The ground rules for using igreensystems.com. Our work for clients is covered by separate written agreements."
      sections={sections}
    />
  );
}

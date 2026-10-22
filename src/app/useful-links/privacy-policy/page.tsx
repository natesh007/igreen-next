import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How iGreen Systems & Technologies collects, uses and protects personal information when you visit igreensystems.com, contact us or apply for a job.',
  alternates: { canonical: '/useful-links/privacy-policy' },
};

const mail = (
  <a href="mailto:contact@igreensystems.com">contact@igreensystems.com</a>
);

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          iGreen Systems &amp; Technologies (&ldquo;iGreen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a technology company founded in 2008, with offices in
          Hyderabad, Telangana and Kakinada, Andhra Pradesh, India. We build IoT platforms, web and mobile applications and cloud
          solutions. This policy applies to this website, igreensystems.com, and to the enquiries and job applications you send us
          through it.
        </p>
        <p>It does not cover the separate products and platforms we build for our clients, which are governed by the terms agreed with each client.</p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <p>We only collect what you choose to give us, plus a small amount of technical data needed to run the site.</p>
        <ul>
          <li>
            <strong>Enquiries.</strong> When you use the contact or project enquiry form: your name, business email address, company (if you give
            one), the topic, and the message you write.
          </li>
          <li>
            <strong>Job applications.</strong> When you apply through the Careers page: the cover letter you write and the resume or CV you
            upload, which usually contains your contact details, education and work history.
          </li>
          <li>
            <strong>Technical data.</strong> Standard server and browser information such as IP address, browser type, pages visited and time of
            visit, collected by our hosting provider and by site analytics.
          </li>
          <li>
            <strong>Email you send us.</strong> If you write to us directly, we keep the correspondence.
          </li>
        </ul>
        <p>We do not ask for payment details, government ID numbers or other sensitive information through this website. Please do not send them.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use it',
    body: (
      <>
        <ul>
          <li>To reply to your enquiry and discuss a project with you.</li>
          <li>To consider your application and contact you about the role you applied for or other suitable openings.</li>
          <li>To keep the site secure, prevent spam and abuse, and fix technical problems.</li>
          <li>To understand, in aggregate, which pages are used so we can improve the site.</li>
          <li>To meet legal and accounting obligations.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use it for automated decisions that affect you.</p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Why we may process it',
    body: (
      <p>
        We process your information because you have asked us to (for example by submitting a form), because it is needed to respond to you or to
        assess a job application, because we have a legitimate interest in running and securing our business, or because the law requires it.
        Where we rely on your consent, you can withdraw it at any time by writing to us.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>We share information only with service providers that help us run the site, under their own security and privacy terms:</p>
        <ul>
          <li>
            <strong>Hosting.</strong> Our website is hosted by Hostinger.
          </li>
          <li>
            <strong>Email.</strong> Enquiries and applications reach us as email through Google Workspace (Gmail).
          </li>
          <li>
            <strong>Spam protection.</strong> Our forms use Google reCAPTCHA, which processes technical data such as your IP address and browser
            information to tell people from bots, under the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>{' '}
            and Terms.
          </li>
          <li>
            <strong>Analytics.</strong> We use Google Analytics to understand, in aggregate, how visitors use the site (for example which pages are
            viewed and how people arrive). Google Analytics uses cookies and similar identifiers and receives technical data such as your IP
            address and device information, under the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
            . You can opt out with the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics opt-out browser add-on
            </a>
            .
          </li>
        </ul>
        <p>
          We may also disclose information if required by law, court order or a government authority, or to protect our rights, our users or the
          security of the site. If our business is ever merged or sold, information may transfer to the new owner under the same protections.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'Where it is processed',
    body: (
      <p>
        Our providers may process data on servers outside India. Where that happens, we rely on the providers&apos; own safeguards and contractual
        commitments to protect it.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <p>
        We keep enquiry emails for as long as they are needed to deal with your request and to keep a reasonable record of our business dealings.
        Job applications are kept for as long as needed to run the hiring process and to consider you for other suitable roles. You can ask us to
        delete your application or enquiry at any time, subject to anything we must keep by law.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    body: (
      <>
        <p>
          This site does not use advertising cookies. Google Analytics sets cookies and uses similar identifiers to count visits and see which pages
          are used, and Google reCAPTCHA uses limited technical storage to keep our forms safe from bots.
        </p>
        <p>
          You can block or clear cookies in your browser settings, or use the Google Analytics opt-out add-on. Blocking reCAPTCHA may stop our
          forms from working; you can always email us instead.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: (
      <p>
        The site is served over HTTPS, form submissions are checked for abuse and sent directly to a small number of our staff, and access to our
        mailboxes is limited and protected by sign-in controls. No method of transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <>
        <p>
          Subject to the law that applies to you, including India&apos;s Digital Personal Data Protection Act, 2023, you may ask us to give you
          access to the personal information we hold about you, correct it, delete it, or stop using it for a purpose, and you may withdraw consent
          you gave us.
        </p>
        <p>
          To make a request, write to {mail} and tell us which right you want to use. We may need to confirm your identity first, and we will reply
          within a reasonable time. If you are unhappy with our response, you may complain to the relevant data protection authority.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: <p>This website is intended for businesses and adults. We do not knowingly collect personal information from children under 18.</p>,
  },
  {
    id: 'links',
    title: 'Links to other sites',
    body: <p>Our pages may link to other websites, such as LinkedIn or our clients&apos; sites. We are not responsible for their content or privacy practices.</p>,
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top shows the current version, and material changes
        will be noted on this page.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <>
        <p>For any question about this policy or your information:</p>
        <p>
          <strong>iGreen Systems &amp; Technologies</strong>
          <br />
          #1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur, Hyderabad, Telangana 500081, India
          <br />
          Email: {mail}
          <br />
          Phone: <a href="tel:+919849481081">+91 984 948 1081</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="22 October 2026"
      intro="We keep this short and specific: what we collect on igreensystems.com, why, who helps us handle it, and how you can ask us to change or delete it."
      sections={sections}
    />
  );
}

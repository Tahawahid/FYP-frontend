import { Accordion } from "../common/Accordion";

export function FAQ() {
  const faqItems = [
    {
      title: "How quickly will you respond to my inquiry?",
      content: (
        <p className="text-gray-700">
          We aim to respond to all inquiries within 24 hours during business days. For urgent matters, 
          we recommend reaching out to our support team directly via phone.
        </p>
      ),
    },
    {
      title: "Do you offer technical support?",
      content: (
        <p className="text-gray-700">
          Yes, our technical support team is available Monday through Friday from 9 AM to 6 PM PST. 
          We provide support via email, chat, and phone to ensure you get the help you need.
        </p>
      ),
    },
    {
      title: "Can I schedule a demo of SkillSync?",
      content: (
        <p className="text-gray-700">
          Absolutely! You can request a demo through our contact form or by emailing us directly at 
          demo@skillsync.ai. Our team will schedule a personalized demo session to show you how 
          SkillSync can benefit your specific needs.
        </p>
      ),
    },
    {
      title: "Do you have a physical office I can visit?",
      content: (
        <p className="text-gray-700">
          Yes, our headquarters is located in Tech Valley, CA. Visits are by appointment only. 
          Please contact us at least 48 hours in advance to schedule a visit, and we'll be happy 
          to welcome you to our office.
        </p>
      ),
    },
    {
      title: "What payment methods do you accept?",
      content: (
        <p className="text-gray-700">
          We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, 
          we also offer invoicing options. All payments are processed securely through our 
          payment gateway.
        </p>
      ),
    },
    {
      title: "Is my data secure with SkillSync?",
      content: (
        <p className="text-gray-700">
          Absolutely. We take data security very seriously. All data is encrypted both in transit 
          and at rest. We comply with GDPR, CCPA, and other relevant data protection regulations. 
          Our systems undergo regular security audits to ensure your information remains protected.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-16">
      <h2 className="text-2xl font-bold text-brand-primary-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion items={faqItems} defaultOpen={0} />
    </div>
  );
}

import { ContactPage } from "../components/contact/ContactPage";

export function meta() {
  return [
    { title: "Contact Us - SkillSync" },
    { name: "description", content: "Get in touch with the SkillSync team. We're here to help with any questions or feedback." },
  ];
}

export default function Contact() {
  return <ContactPage />;
}

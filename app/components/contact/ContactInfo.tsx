import { SocialIconGroup } from "../footer/SocialIconGroup";
import { SocialIcon } from "../footer/SocialIcon";
import { ContactInfoItem } from "./ContactInfoItem";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-primary-800 mb-6">Get in Touch</h2>
      
      <p className="text-brand-primary-700 mb-8">
        Have questions about SkillSync? We're here to help! Reach out to us through any of the channels below.
      </p>
      
      <div className="space-y-6 mb-8">
        <ContactInfoItem 
          icon="map-marker-alt" 
          title="Our Location"
          content={<>123 Innovation Drive<br />Tech Valley, CA 94043</>}
        />
        
        <ContactInfoItem 
          icon="envelope" 
          title="Email Us"
          content={<a href="mailto:contact@skillsync.ai" className="text-brand-primary-600 hover:text-brand-primary-500">contact@skillsync.ai</a>}
        />
        
        <ContactInfoItem 
          icon="phone-alt" 
          title="Call Us"
          content={<a href="tel:+1234567890" className="text-brand-primary-600 hover:text-brand-primary-500">+1 (234) 567-890</a>}
        />
        
        <ContactInfoItem 
          icon="clock" 
          title="Business Hours"
          content={<>Monday - Friday<br />9:00 AM - 6:00 PM PST</>}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-brand-primary-800 mb-4">Follow Us</h3>
        <SocialIconGroup>
          <SocialIcon name="Facebook" url="https://facebook.com" icon="facebook" />
          <SocialIcon name="Twitter" url="https://twitter.com" icon="twitter" />
          <SocialIcon name="LinkedIn" url="https://linkedin.com" icon="linkedin" />
          <SocialIcon name="Instagram" url="https://instagram.com" icon="instagram" />
        </SocialIconGroup>
      </div>
    </div>
  );
}

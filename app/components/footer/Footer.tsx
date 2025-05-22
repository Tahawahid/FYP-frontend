import { FooterColumn } from "./FooterColumn";
import { FooterLink } from "./FooterLink";
import { FooterLinkList } from "./FooterLinkList";
import { SocialIcon } from "./SocialIcon";
import { SocialIconGroup } from "./SocialIconGroup";
import { ContactItem } from "./ContactItem";
import { NewsletterForm } from "./NewsletterForm";
import { FooterDivider } from "./FooterDivider";
import { FooterBottom } from "./FooterBottom";
import { FooterWave } from "./FooterWave";
import { FooterLogo } from "./FooterLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/skillsync", icon: "twitter" },
    { name: "LinkedIn", url: "https://linkedin.com/company/skillsync", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com/skillsync", icon: "instagram" },
    { name: "Facebook", url: "https://facebook.com/skillsync", icon: "facebook" }
  ];
  
  const quickLinks = [
    { text: "Home", to: "/" },
    { text: "Features", to: "/features" },
    { text: "About Us", to: "/about" },
    { text: "Pricing", to: "/pricing" },
    { text: "FAQ", to: "/faq" }
  ];
  
  const resourceLinks = [
    { text: "Blog", to: "/blog" },
    { text: "Career Resources", to: "/career-resources" },
    { text: "Tutorials", to: "/tutorials" },
    { text: "Webinars", to: "/webinars" },
    { text: "Support Center", to: "/support" }
  ];
  
  const legalLinks = [
    { text: "Privacy Policy", to: "/privacy" },
    { text: "Terms of Service", to: "/terms" },
    { text: "Cookie Policy", to: "/cookies" }
  ];
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-primary-100/30 dark:bg-brand-primary-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-brand-secondary-100/30 dark:bg-brand-secondary-900/20 blur-3xl"></div>
      </div>
      
      {/* Top Wave Divider */}
      <FooterWave />
      
      <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <FooterLogo 
              logoSrc="/images/logo02.png"
              logoAlt="SkillSync Logo"
              companyName="SkillSync"
              description="Empowering professionals to build future-ready skills through AI-driven insights and personalized learning paths."
            />
            
            {/* Social Media Links */}
            <SocialIconGroup>
              {socialLinks.map((link, index) => (
                <SocialIcon 
                  key={index}
                  name={link.name}
                  url={link.url}
                  icon={link.icon}
                />
              ))}
            </SocialIconGroup>
          </div>
          
          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLinkList>
              {quickLinks.map((link, index) => (
                <FooterLink key={index} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterLinkList>
          </FooterColumn>
          
          {/* Resources */}
          <FooterColumn title="Resources">
            <FooterLinkList>
              {resourceLinks.map((link, index) => (
                <FooterLink key={index} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterLinkList>
          </FooterColumn>
          
          {/* Contact Info */}
          <FooterColumn title="Contact Us">
            <FooterLinkList spacing="loose">
              <ContactItem icon="map-marker-alt">
                123 Innovation Drive<br />
                Tech Hub, CA 94103
              </ContactItem>
              <ContactItem 
                icon="envelope" 
                href="mailto:contact@skillsync.com"
              >
                contact@skillsync.com
              </ContactItem>
              <ContactItem 
                icon="phone" 
                href="tel:+1-800-SKILLSYNC"
              >
                +1-800-SKILLSYNC
              </ContactItem>
            </FooterLinkList>
            
            {/* Newsletter Signup */}
            <NewsletterForm />
          </FooterColumn>
        </div>
        
        {/* Divider */}
        <FooterDivider />
        
        {/* Bottom Section */}
        <FooterBottom 
          copyrightText={`© ${currentYear} SkillSync. All rights reserved.`}
          links={legalLinks}
        />
      </div>
    </footer>
  );
}

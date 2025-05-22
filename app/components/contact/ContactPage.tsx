import { Navigation } from "../Navigation";
import { Footer } from "../footer";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";
import { PageHeader } from "../common/PageHeader";
import { FloatingShapes } from "./FloatingShapes";
import { FAQ } from "./FAQ";

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background with linear gradient */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-brand-primary-50 via-white to-brand-secondary-50"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 15s ease infinite"
        }}
      />
      
      {/* Floating decoration */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-24 relative z-10">
        {/* Page header */}
        <PageHeader
          title="Contact Us"
          subtitle="We'd love to hear from you. Get in touch with our team."
        />
        
        {/* Contact section with glassmorphism */}
        <div className="mt-12 max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl border border-gray-300 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Contact form */}
            <div className="p-8 md:p-12">
              <ContactForm />
            </div>
            
            {/* Right side - Contact info */}
            <div className="bg-brand-primary-50 p-8 md:p-12">
              <ContactInfo />
            </div>
          </div>
        </div>
        
        {/* Map section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-brand-primary-800 mb-6">Find Us</h2>
          <ContactMap />
        </div>
        
        {/* FAQ section */}
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  );
}

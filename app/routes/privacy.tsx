import { Link } from "react-router";

export function meta() {
  return [
    { title: "Privacy Policy - SkillSync" },
    { name: "description", content: "Learn how SkillSync protects your privacy and handles your personal data." },
  ];
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="SkillSync Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
            </Link>
            <Link to="/help" className="text-brand-primary-600 hover:text-brand-primary-700">
              Help Center
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to SkillSync. We respect your privacy and are committed to protecting your personal data. 
                    This privacy policy explains how we collect, use, and safeguard your information when you use our 
                    career development platform and AI-powered services.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using SkillSync, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Professional background, skills, and career preferences</li>
                    <li>Resume and portfolio information</li>
                    <li>Chat conversations with our AI assistants</li>
                    <li>Learning progress and assessment results</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and feature interactions</li>
                    <li>Performance and error logs</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Provide personalized career guidance and recommendations</li>
                    <li>Improve our AI algorithms and service quality</li>
                    <li>Send you relevant updates and educational content</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Information Sharing</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                 <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Information Sharing</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Secure data centers with physical security measures</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    To exercise these rights, please contact us at privacy@skillsync.com.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
                    <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing cookies:</strong> Deliver relevant content and advertisements</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    You can manage cookie preferences through your browser settings or our cookie consent tool.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our services and AI algorithms</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    When you delete your account, we will remove your personal data within 30 days, 
                    except where retention is required by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Standard contractual clauses approved by regulatory authorities</li>
                    <li>Adequacy decisions by relevant data protection authorities</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    SkillSync is not intended for children under 16 years of age. We do not knowingly collect 
                    personal information from children under 16. If you believe we have collected information 
                    from a child under 16, please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any material 
                    changes by posting the new policy on this page and updating the "Last updated" date. 
                    We encourage you to review this policy periodically.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@skillsync.com</p>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> SkillSync Privacy Team, 123 Innovation Drive, Tech City, TC 12345</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </section>

              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/contact"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <i className="fas fa-envelope text-3xl text-brand-primary-600 mb-3"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Have questions about your privacy?</p>
            </Link>
            
            <Link
              to="/dashboard/profile"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <i className="fas fa-user-cog text-3xl text-brand-primary-600 mb-3"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Manage Data</h3>
              <p className="text-sm text-gray-600">Update your privacy settings</p>
            </Link>
            
            <Link
              to="/help"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <i className="fas fa-question-circle text-3xl text-brand-primary-600 mb-3"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Get Help</h3>
              <p className="text-sm text-gray-600">Visit our help center</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

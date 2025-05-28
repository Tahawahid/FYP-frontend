import { Link } from "react-router";

export function meta() {
  return [
    { title: "Terms of Service - SkillSync" },
    { name: "description", content: "Read SkillSync's terms of service and user agreement." },
  ];
}

export default function Terms() {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to SkillSync. These Terms of Service ("Terms") govern your use of our career development 
                    platform and AI-powered services. By accessing or using SkillSync, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you do not agree to these Terms, please do not use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    SkillSync provides:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>AI-powered career guidance and skill assessment tools</li>
                    <li>Personalized learning recommendations and job matching</li>
                    <li>Professional development tracking and analytics</li>
                    <li>Interactive chat assistants for career support</li>
                    <li>Educational content and resources</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts and Registration</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To use certain features of SkillSync, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Be responsible for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Acceptable Use</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to use SkillSync only for lawful purposes. You will not:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Upload malicious code or attempt to hack our systems</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Share false, misleading, or inappropriate content</li>
                    <li>Use our services for commercial purposes without permission</li>
                    <li>Attempt to reverse engineer our AI algorithms</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    SkillSync and its content are protected by intellectual property laws. We grant you a limited, 
                    non-exclusive, non-transferable license to use our services for personal, non-commercial purposes.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You retain ownership of content you submit, but grant us a license to use it to provide our services.
                  </p>
                </section>

                 <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. AI Services and Limitations</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our AI-powered services are designed to assist with career development. However, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>AI recommendations are suggestions, not guarantees</li>
                    <li>You should use your own judgment in making career decisions</li>
                    <li>AI responses may not always be accurate or complete</li>
                    <li>Our services supplement but do not replace professional career counseling</li>
                    <li>We continuously improve our AI but cannot guarantee perfection</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy and Data Protection</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our 
                    <Link to="/privacy" className="text-brand-primary-600 hover:text-brand-primary-700 underline">Privacy Policy</Link>, 
                    which is incorporated into these Terms by reference.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Payment and Subscription Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Some features of SkillSync may require payment. By purchasing a subscription, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Pay all fees associated with your chosen plan</li>
                    <li>Automatic renewal unless cancelled before the renewal date</li>
                    <li>Our refund policy as outlined in your subscription agreement</li>
                    <li>Price changes with 30 days advance notice</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Termination</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Either party may terminate your account:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>You may delete your account at any time through your profile settings</li>
                    <li>We may suspend or terminate accounts that violate these Terms</li>
                    <li>We may discontinue services with reasonable notice</li>
                    <li>Upon termination, your access to paid features will cease</li>
                    <li>Some provisions of these Terms survive termination</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Disclaimers and Limitations</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    SkillSync is provided "as is" without warranties of any kind. We disclaim all warranties, 
                    express or implied, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Accuracy, reliability, or completeness of content</li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Security of data transmission</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Our liability is limited to the maximum extent permitted by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Indemnification</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to indemnify and hold SkillSync harmless from any claims, damages, or expenses 
                    arising from your use of our services, violation of these Terms, or infringement of any 
                    third-party rights.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Dispute Resolution</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Any disputes arising from these Terms or your use of SkillSync will be resolved through:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Good faith negotiation between the parties</li>
                    <li>Binding arbitration if negotiation fails</li>
                    <li>Arbitration conducted under applicable arbitration rules</li>
                    <li>Jurisdiction in the courts of [Your Jurisdiction]</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], 
                    without regard to conflict of law principles.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may modify these Terms at any time. We will notify you of material changes by posting 
                    the updated Terms on our website and updating the "Last updated" date. Your continued use 
                    of SkillSync after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">15. Severability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions 
                    will continue in full force and effect.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">16. Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@skillsync.com</p>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> SkillSync Legal Team, 123 Innovation Drive, Tech City, TC 12345</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">17. Entire Agreement</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms, together with our Privacy Policy and any other legal notices published by us 
                    on SkillSync, constitute the entire agreement between you and SkillSync concerning our services.
                  </p>
                </section>

              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/privacy"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <i className="fas fa-shield-alt text-3xl text-brand-primary-600 mb-3"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Privacy Policy</h3>
              <p className="text-sm text-gray-600">Learn how we protect your data</p>
            </Link>
            
            <Link
              to="/contact"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <i className="fas fa-envelope text-3xl text-brand-primary-600 mb-3"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Legal</h3>
              <p className="text-sm text-gray-600">Questions about these terms?</p>
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

          {/* Agreement Notice */}
          <div className="mt-8 bg-brand-primary-50 rounded-xl p-6">
            <div className="text-center">
              <i className="fas fa-handshake text-3xl text-brand-primary-600 mb-4"></i>
              <h3 className="text-xl font-bold text-brand-primary-800 mb-2">
                By using SkillSync, you agree to these terms
              </h3>
              <p className="text-brand-primary-600 mb-6">
                We're committed to providing you with the best career development experience while protecting your rights.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
              >
                <i className="fas fa-arrow-right mr-2"></i>
                Continue to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import PolicyLayout from "@/components/layout/PolicyLayout";

export default function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="mx-auto space-y-6 text-gray-700">

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg leading-relaxed mx-auto">
            At <strong>TanaRiri Overseas LLP</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, place an order, 
            or interact with our services. By using our platform, you consent to the practices described in this policy.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">1. Information We Collect</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We collect information you provide directly when you create an account, place an order, subscribe to our newsletter, 
              or contact customer support. This includes your full name, email address, phone number, shipping and billing address, 
              payment details (processed securely via third-party gateways), and any communication you send us. 
              We also collect order history, preferences, and feedback to improve your shopping experience.
            </p>
            <p>
              When you browse our website, we automatically receive your device’s internet protocol (IP) address, browser type, 
              operating system, referring URLs, and pages viewed. This helps us understand user behavior and enhance site performance. 
              We use cookies and similar tracking technologies to remember your cart, login status, and preferences. 
              You can disable cookies in your browser, but some features may not function properly.
            </p>
          </div>
        </div>

        {/* 2. How We Use Your Information */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">2. How We Use Your Information</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              Your personal information is used to process and fulfill your orders, including payment verification, packaging, 
              shipping, and delivery updates via SMS and email. We send transactional notifications such as order confirmation, 
              tracking details, invoice copies, and return status. With your consent, we may send promotional emails about new products, 
              discounts, or restocked items. You can unsubscribe at any time using the link in any email.
            </p>
            <p>
              We analyze user behavior and purchase patterns to improve our website, product selection, and customer service. 
              This includes personalizing recommendations, optimizing site navigation, and preventing fraudulent transactions. 
              Your data helps us comply with legal obligations, resolve disputes, and enforce our policies.
            </p>
          </div>
        </div>

        {/* 3. Data Sharing & Disclosure */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">3. Data Sharing and Disclosure</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We share your information with trusted third-party service providers who assist in operating our business. 
              This includes courier partners (DTDC, Blue Dart, DHL, FedEx) for delivery, payment gateways (Razorpay, PayU) for transactions, 
              and cloud hosting providers for secure data storage. These partners are contractually obligated to protect your data 
              and use it only for the services they provide on our behalf.
            </p>
            <p>
              We do not sell, rent, or trade your personal information with any third party for marketing purposes. 
              However, we may disclose your data if required by law, such as in response to a court order, government request, 
              or to protect our legal rights. In the event of a merger, acquisition, or sale of assets, your data may be transferred 
              to the new entity under the same privacy standards.
            </p>
          </div>
        </div>

        {/* 4. Data Security */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">4. Data Security</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. All sensitive data is transmitted via Secure Socket Layer (SSL) encryption. 
              Payment transactions are processed through PCI DSS-compliant gateways that never store your full card details on our servers.
            </p>
            <p>
              Access to your data is restricted to authorized personnel only. We regularly audit our systems and conduct security training 
              for employees. Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure. 
              We cannot guarantee absolute security but strive to protect your information to the fullest extent possible.
            </p>
          </div>
        </div>

        {/* 5. Your Rights & Choices */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">5. Your Rights and Choices</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              You have the right to access, correct, update, or delete your personal information at any time. 
              Log into your account to manage your profile, addresses, and communication preferences. 
              You may request a copy of your data or ask us to delete it by emailing privacy@tanariri.com. 
              We will respond within 30 days as required by law.
            </p>
            <p>
              You can opt out of marketing emails by clicking “Unsubscribe” in any promotional message. 
              You may also disable cookies in your browser settings, though this may limit site functionality. 
              For any privacy-related concerns, including data breaches or complaints, contact us immediately.
            </p>
          </div>
        </div>

        {/* 6. Data Retention */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">6. Data Retention</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
              including order processing, customer support, and legal compliance. Transaction records are kept for 7 years 
              as required under Indian tax laws. Inactive accounts may be deleted after 3 years of no activity.
            </p>
            <p>
              Once your data is no longer required, we securely delete or anonymize it. 
              Backup copies may be retained for disaster recovery but are inaccessible for regular use.
            </p>
          </div>
        </div>

        {/* 7. Children's Privacy */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">7. Children's Privacy</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              Our website and services are not intended for individuals under the age of 18. 
              We do not knowingly collect personal information from children. 
              If we become aware that a child has provided us with personal data, we will take immediate steps to delete it. 
              Parents or guardians who believe their child has submitted information should contact us for removal.
            </p>
          </div>
        </div>

        {/* 8. Changes to Policy */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">8. Changes to This Privacy Policy</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              The updated version will be posted on this page with a revised “Last Updated” date. 
              We encourage you to review this policy periodically. Your continued use of our website after changes 
              constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center pt-8">
          <p className="text-sm mb-4 max-w-2xl mx-auto">
            For privacy-related questions, data requests, or concerns, please reach out to our Data Protection Officer. 
            We are available Monday to Saturday, 10:00 AM to 6:00 PM IST.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@tanariri.com"
              className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#172554] transition"
            >
              Email: privacy@tanariri.com
            </a>
            <a
              href="/customer-care"
              className="inline-block text-[#1E3A8A] px-8 py-3 rounded-md font-medium hover:bg-[#1E3A8A] hover:text-white transition"
            >
              Contact Support
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Last updated: November 2025
        </p>
      </div>
    </PolicyLayout>
  );
}
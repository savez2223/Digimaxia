import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            DigiMaxia collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information such as your name, email
              address, phone number, business details, payment information, and
              any other data you provide when using our services or contacting
              us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you</li>
              <li>To process payments</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              3. Cookies & Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance user
              experience, analyze traffic, and improve our website performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share data with
              trusted third-party services such as payment gateways, analytics
              tools, and marketing platforms only when necessary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              5. International Data Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred and processed outside your
              country. We ensure appropriate security measures are in place to
              protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              6. GDPR Rights (EU Users)
            </h2>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Right to access your data</li>
              <li>Right to correct or delete data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              7. CCPA Rights (California Users)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              California residents may request details about collected data and
              ask for deletion of their personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your
              information from unauthorized access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              9. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us through our website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

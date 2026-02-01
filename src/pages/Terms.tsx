import Layout from "@/components/layout/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our
            services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using DigiMaxia’s website and services, you agree
              to be bound by these Terms and Conditions. If you do not agree,
              please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              DigiMaxia provides digital marketing, branding, website
              development, and related services. We reserve the right to modify
              or discontinue services at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You must provide accurate information</li>
              <li>You must not misuse our services</li>
              <li>You must follow all applicable laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              4. Payments & Billing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Payments must be made as agreed. All fees are non-refundable
              unless otherwise stated in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, designs, logos, and materials belong to DigiMaxia
              unless otherwise stated. You may not reuse without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              DigiMaxia shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend access to our
              services if you violate these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              8. Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party tools such as payment processors and
              analytics. We are not responsible for their policies or actions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and interpreted according to
              applicable international business laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              10. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms at any time. Continued use of our
              services means acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions regarding these Terms, please contact us
              through our website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;

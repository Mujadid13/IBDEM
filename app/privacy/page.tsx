export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: March 15, 2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information that you provide directly to us, including name, email address,
              and professional affiliation when you register for an account or subscribe to our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect against unauthorized access,
              alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at
              privacy@healthobservatory.org
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
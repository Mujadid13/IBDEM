export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: March 15, 2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="text-muted-foreground">
              By accessing our website, you agree to be bound by these Terms of Service and comply
              with all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily access the materials on our website for personal,
              non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on our website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              We shall not be held liable for any damages arising out of the use or inability to
              use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at
              legal@healthobservatory.org
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
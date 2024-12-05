export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">What is the Health Observatory?</h2>
          <p className="text-muted-foreground">
            The Health Observatory is a comprehensive platform that monitors and analyzes global health trends
            and environmental factors affecting public health worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">How is the data collected?</h2>
          <p className="text-muted-foreground">
            We collect data through partnerships with leading institutions, satellite observations,
            and various health monitoring systems worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">How often is the data updated?</h2>
          <p className="text-muted-foreground">
            Data is updated in real-time where possible, with comprehensive updates performed weekly
            for most metrics and monthly for detailed analytical reports.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Who can use this platform?</h2>
          <p className="text-muted-foreground">
            Our platform is open to researchers, healthcare professionals, policymakers, and anyone
            interested in global health and environmental data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Is the data freely available?</h2>
          <p className="text-muted-foreground">
            Basic data access is free. Advanced features and detailed analytics are available
            through our premium subscriptions.
          </p>
        </div>
      </div>
    </div>
  );
}
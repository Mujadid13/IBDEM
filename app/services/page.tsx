export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          IBDEMS provides comprehensive services in global health monitoring and environmental
          data analysis to support better decision-making in public health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Health Data Analytics</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Disease burden analysis and tracking</li>
              <li>Mortality rate assessments</li>
              <li>Health intervention impact evaluation</li>
              <li>Predictive health modeling</li>
              <li>Custom health data reports</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Environmental Monitoring</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Air quality monitoring</li>
              <li>Climate change impact assessment</li>
              <li>Environmental health risk analysis</li>
              <li>Satellite data interpretation</li>
              <li>Environmental trend forecasting</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Consulting Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Health policy recommendations</li>
              <li>Environmental impact assessments</li>
              <li>Public health strategy development</li>
              <li>Risk mitigation planning</li>
              <li>Stakeholder engagement</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Research & Development</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Health data methodology development</li>
              <li>Environmental monitoring technologies</li>
              <li>Machine learning applications</li>
              <li>Collaborative research projects</li>
              <li>Innovation in health monitoring</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Solutions</h2>
          <p className="text-muted-foreground">
            We understand that every organization has unique needs. Contact us to discuss how we can
            tailor our services to meet your specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
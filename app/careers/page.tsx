export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Careers</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          Join our team of dedicated professionals working to improve global health through
          data-driven insights and innovative technology.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Open Positions</h2>
        
        <div className="space-y-6">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
            <p className="text-muted-foreground mb-4">
              Work with our team to analyze health and environmental data, develop predictive
              models, and create meaningful insights.
            </p>
            <p className="font-medium">Requirements:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Advanced degree in Data Science, Statistics, or related field</li>
              <li>3+ years experience in health data analysis</li>
              <li>Proficiency in Python, R, and SQL</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Environmental Analyst</h3>
            <p className="text-muted-foreground mb-4">
              Analyze environmental data and its impact on public health, create reports,
              and contribute to our Earth Observation platform.
            </p>
            <p className="font-medium">Requirements:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Degree in Environmental Science or related field</li>
              <li>Experience with GIS and remote sensing</li>
              <li>Strong analytical and reporting skills</li>
            </ul>
          </div>
        </div>

        <p className="text-lg mt-8">
          To apply, please send your resume and cover letter to careers@healthobservatory.org
        </p>
      </div>
    </div>
  );
}
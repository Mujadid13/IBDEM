export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          The Health Observatory is a pioneering platform dedicated to monitoring and analyzing global health trends
          and environmental factors affecting public health worldwide.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          To provide comprehensive, accurate, and accessible health and environmental data that enables better
          decision-making in public health policy and interventions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-muted-foreground mb-6">
          To be the world's leading platform for health and environmental data integration, supporting global
          efforts to improve public health and environmental sustainability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
          <li>Monitor and analyze global disease patterns and trends</li>
          <li>Track environmental factors affecting public health</li>
          <li>Provide data-driven insights for health policy decisions</li>
          <li>Collaborate with leading institutions worldwide</li>
          <li>Support research and development in public health</li>
        </ul>
      </div>
    </div>
  );
}
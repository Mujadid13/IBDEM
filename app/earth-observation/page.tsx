"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

type ComponentType = 'co' | 'so2' | 'ndvi';

interface ComponentData {
  title: string;
  description: string;
}

const componentData: Record<ComponentType, ComponentData> = {
  co: {
    title: 'Carbon Monoxide',
    description: 'Carbon monoxide (CO) is a colorless, odorless gas that can be harmful when inhaled in large amounts. The data shows CO concentrations across different regions, helping identify potential health risks and pollution sources.',
  },
  so2: {
    title: 'Sulphur Dioxide',
    description: 'Sulphur dioxide (SO2) is a toxic gas with a pungent odor. Monitoring SO2 levels helps assess air quality and potential respiratory health risks in different areas.',
  },
  ndvi: {
    title: 'Normalized Difference Vegetation Index',
    description: 'NDVI is a measure of vegetation health and density. This index helps monitor ecosystem changes, agricultural productivity, and potential impacts on public health.',
  },
};

export default function EarthObservationPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Earth Observation</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Monitor environmental factors affecting public health through satellite data and
            advanced analytics.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            width={400}
            height={300}
            alt="Earth Observation"
            className="rounded-lg"
          />
        </div>
      </div>

      <Card className="p-6">
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={selectedComponent === 'co' ? 'default' : 'outline'}
            onClick={() => setSelectedComponent('co')}
          >
            Carbon Monoxide
          </Button>
          <Button
            variant={selectedComponent === 'so2' ? 'default' : 'outline'}
            onClick={() => setSelectedComponent('so2')}
          >
            Sulphur Dioxide
          </Button>
          <Button
            variant={selectedComponent === 'ndvi' ? 'default' : 'outline'}
            onClick={() => setSelectedComponent('ndvi')}
          >
            NDVI
          </Button>
        </div>

        {selectedComponent && (
          <div className="space-y-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="flex items-center justify-center">
                <p className="text-muted-foreground">Earth Engine Map Integration Area</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">{componentData[selectedComponent].title}</h2>
              <p className="text-muted-foreground mb-6">
                {componentData[selectedComponent].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Global Average</h3>
                <p className="text-2xl font-bold">127.5</p>
                <p className="text-sm text-muted-foreground">Parts per million</p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Trend</h3>
                <p className="text-2xl font-bold text-red-500">+2.3%</p>
                <p className="text-sm text-muted-foreground">Year over year</p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Risk Level</h3>
                <p className="text-2xl font-bold text-yellow-500">Moderate</p>
                <p className="text-sm text-muted-foreground">Based on WHO guidelines</p>
              </Card>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
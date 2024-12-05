"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const diseases = ["Malaria", "Lung Cancer", "Acute Respiratory Infection"];
const regions = ["Central Asia", "South & Southeast Asia", "Sub-Saharan Africa"];
const countries = {
  "Central Asia": ["Tajikistan"],
  "South & Southeast Asia": [
    "Pakistan",
    "India",
    "Bangladesh",
    "Cambodia",
    "Nepal",
  ],
  "Sub-Saharan Africa": ["Kenya", "Liberia", "Mozambique", "Nigeria"],
};
const years = Array.from({ length: 12 }, (_, i) => (2013 + i).toString());

export default function GBDPage() {
  const [selectedDisease, setSelectedDisease] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [showTable, setShowTable] = useState(false);
  const [showVisualization, setShowVisualization] = useState(false);
  const [showResultsButtons, setShowResultsButtons] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]); // Stores backend data for table rendering

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      disease: selectedDisease,
      region: selectedRegion,
      country: selectedCountry,
      year: selectedYear,
    };

    try {
      const response = await fetch("/api/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Data from backend:", result);
      setTableData(result); // Store backend data for table rendering
      setShowResultsButtons(true); // Show buttons for "Show Table" and "Show Visualization"
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleClear = () => {
    setSelectedDisease("");
    setSelectedRegion("");
    setSelectedCountry("");
    setSelectedYear("");
    setShowTable(false);
    setShowVisualization(false);
    setShowResultsButtons(false);
    setTableData([]); // Clear the table data
  };

  const getDescription = () => {
    if (!selectedDisease) return "";

    const descriptions = {
      Malaria:
        "Malaria remains a significant public health challenge, particularly in tropical and subtropical regions. The data shows infection rates, mortality, and the effectiveness of intervention programs.",
      "Lung Cancer":
        "Lung cancer statistics include incidence rates, mortality, risk factors, and treatment outcomes. This data helps identify trends and evaluate healthcare interventions.",
      "Acute Respiratory Infection":
        "ARI data encompasses various respiratory conditions, showing seasonal patterns, demographic impacts, and the burden on healthcare systems.",
    };

    return descriptions[selectedDisease as keyof typeof descriptions];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Global Burden of Diseases</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Utilize real-time environmental data from Earth Observation
            technologies. Our platform provides key insights into air quality,
            climate patterns, and environmental changes, helping to better
            understand their impact on public health.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            width={400}
            height={300}
            alt="Global Health Data"
            className="rounded-lg"
          />
        </div>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedDisease} onValueChange={setSelectedDisease}>
              <SelectTrigger>
                <SelectValue placeholder="Select Disease" />
              </SelectTrigger>
              <SelectContent>
                {diseases.map((disease) => (
                  <SelectItem key={disease} value={disease}>
                    {disease}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCountry}
              onValueChange={setSelectedCountry}
              disabled={!selectedRegion}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {selectedRegion &&
                  countries[selectedRegion as keyof typeof countries].map(
                    (country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    )
                  )}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              type="submit"
              disabled={
                !selectedDisease ||
                !selectedRegion ||
                !selectedCountry ||
                !selectedYear
              }
            >
              Show Results
            </Button>
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </form>

        {showResultsButtons && (
          <div className="flex justify-center gap-4 mt-6">
            <Button type="button" onClick={() => setShowTable(true)}>
              Show Table
            </Button>
            <Button type="button" onClick={() => setShowVisualization(true)}>
              Show Visualization
            </Button>
          </div>
        )}

        {/* Display Data in Table Format */}
        {showTable && tableData.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <table
              style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}
            >
              <thead>
                <tr>
                  {Object.keys(tableData[0])
                    .filter(
                      (key) =>
                        !["NO2_mean", "CO_mean", "SO2_mean", "mean"].includes(key)
                    )
                    .map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((record, index) => (
                  <tr key={index}>
                    {Object.entries(record)
                      .filter(
                        ([key]) =>
                          !["NO2_mean", "CO_mean", "SO2_mean", "mean"].includes(
                            key
                          )
                      )
                      .map(([key, value], idx) => (
                        <td key={idx}>{String(value)}</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showVisualization && (
          <div style={{ marginTop: "20px" }}>
            <p>Visualization will be displayed here.</p>
          </div>
        )}

        {(showTable || showVisualization) && (
          <div className="flex justify-center gap-4 mt-4">
            <Button
              type="submit"
              disabled={
                !selectedDisease ||
                !selectedRegion ||
                !selectedCountry ||
                !selectedYear
              }
            >
              Show Results
            </Button>
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

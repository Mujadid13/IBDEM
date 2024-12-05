import { NextRequest, NextResponse } from "next/server";
const connectToDatabase = require("../../../lib/db");

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    let { disease, region, country, year } = body;


    // Check if the disease is "Acute Respiratory Infection" and abbreviate it
    if (disease === "Acute Respiratory Infection") {
      disease = "ARI"; // Abbreviate
    }

    // Validate required fields
    if (!disease || !region || !country || !year) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
  
    // Dynamically generate the collection name
    const dynamicCollectionName = `${country.replace(/\s+/g, "_")}_${disease.replace(/\s+/g,"_")}_${year}`;

    // Connect to the database
    const client = await connectToDatabase();
    const dbName = "IBDEM"; // Replace with your actual database name

    // Select the database and the dynamically named collection
    const database = client.db(dbName);
    const collection = database.collection(dynamicCollectionName);

    // Query the database
    const pipeline = [
        {
          $project: {
            _id: 0, 
            ADM1DHS: 1, 
            ADM1NAME: 1, 
            ALT_DEM: 1, 
            CCFIPS: 1, 
            CO_mean: 1,
            DHSCC: 1,
            DHSCLUST: 1,
            DHSID: 1,
            DHSREGCO: 1,
            DHSREGNA: 1,
            DHSYEAR: 1,
            LATNUM: 1,
            LONGNUM: 1,
            NO2_mean: 1,
            NO_ARI_CASES: 1,
            SO2_mean: 1,
            SOURCE: 1,
            URBAN_RURA: 1,
            ch_ari: 1,
            mean: 1,
          },
        },
      ];
    const documents = await collection.aggregate(pipeline).toArray();

    // Return the retrieved data as a JSON response
    return new NextResponse(JSON.stringify(documents), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

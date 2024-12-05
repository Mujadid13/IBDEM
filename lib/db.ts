const { MongoClient } = require("mongodb");

const connectToDatabase = async () => {
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
        throw new Error("MONGO_URI is not defined in the environment variables");
    }

    const options = {
        connectTimeoutMS: 30000, // Increase connection timeout
        serverSelectionTimeoutMS: 30000, // Increase server selection timeout
    };

    const client = new MongoClient(uri, options);

    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        return client; // Return the client for further use
    } catch (error: unknown) {
        // Cast 'error' to 'any' to safely access properties
        const err = error as any;

        console.error("Connection error:", err.message);

        // Debugging additional info
        console.error("Error Details:", {
            code: err.code,
            name: err.name,
            reason: err.reason,
        });

        throw err; // Re-throw the error for the caller to handle
    }
};

module.exports = connectToDatabase;

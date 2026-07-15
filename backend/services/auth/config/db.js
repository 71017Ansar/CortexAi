import mongoose from "mongoose";
import dns from "dns";

// Use public DNS servers
dns.setServers([
  "1.1.1.1", // Cloudflare
  "8.8.8.8", // Google
]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

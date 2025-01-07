import { Router } from "express";
import { deleteProduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.delete("/:id", deleteProduct);

export default router;

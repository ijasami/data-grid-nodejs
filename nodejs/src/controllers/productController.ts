import { Request, Response } from "express";
import { products } from "../data/products";

export const getProducts = (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;

  const paginatedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / limitNumber);

  res.json({
    currentPage: pageNumber,
    totalPages,
    products: paginatedProducts,
  });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  const productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

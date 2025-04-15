import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const daisoService = {
  async getAllProducts() {
    const products = await prisma.products.findMany();
    return products;
  },
  async getProductById(id: number) {
    const product = await prisma.products.findUnique({
      where: { id: id },
    });
    return product;
  },
  async createProduct(name: string, price: number, quantity: number) {
    const newProduct = await prisma.products.create({
      data: { name, price, quantity },
    });
    return newProduct;
  },
  async updateProduct(
    id: number,
    name: string,
    price: number,
    quantity: number
  ) {
    const updatedProduct = await prisma.products.update({
      where: { id: id },
      data: { name, price, quantity },
    });
    return updatedProduct;
  },
  async deleteProduct(id: number) {
    const deletedProduct = await prisma.products.delete({
      where: { id: id },
    });
    return deletedProduct;
  },
};

export default daisoService;

import { PrismaClient } from "../generated/prisma";
import express, { Request, Response } from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const prisma = new PrismaClient();

// 전체 조회
app.get("/daiso", async (req: Request, res: Response) => {
  const products = await prisma.products.findMany();
  res.json(products);
});

// 상세 조회:이름으로
app.get("/daiso/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  const product = await prisma.products.findMany({
    where: { name: name },
  });
  res.json(product);
});

// 생성
app.post("/daiso", async (req: Request, res: Response) => {
  const { name, price, quantity } = req.body;
  const product = await prisma.products.create({
    data: { name, price, quantity },
  });
  res.json(product);
});

// 수정
app.put("/daiso", async (req: Request, res: Response) => {
  const { id, name, price, quantity } = req.body;
  const product = await prisma.products.update({
    where: { id: Number(id) },
    data: { name, price: Number(price), quantity: Number(quantity) },
  });
  res.json(product);
});

// 삭제
app.delete("/daiso", async (req: Request, res: Response) => {
  const { id } = req.body;
  const product = await prisma.products.delete({
    where: { id: Number(id) },
  });
  res.json({ message: "삭제 완료" });
});

app.listen(3000, () => {
  console.log("다이소 오픈");
});

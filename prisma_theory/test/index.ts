import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const 철학과학생들 = await prisma.students.findMany({
    where: {
      major_id: 3, // '철학과' 전공 ID
    },
    include: {
      majors: true, // 전공 정보 같이 출력
    },
  });

  console.dir(철학과학생들, { depth: null });
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

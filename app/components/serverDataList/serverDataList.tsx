import prisma from "@/prisma/prisma";

async function ServerDataList(month: any) {
  const data = await prisma.data.findMany({
    where: {
      date: {
        gte: new Date(`2024-0${month.month}-01T01:00:00.459+00:00`),
        lte: new Date(`2024-0${month.month}-29T01:00:00.459+00:00`),
      },
    },
  });

  return (
    <div style={{ clear: "both" }}>
      {data.map((x: any) => (
        <ul>
          <li key={x.id}>{x.weight}</li>
        </ul>
      ))}
    </div>
  );
}

export default ServerDataList;

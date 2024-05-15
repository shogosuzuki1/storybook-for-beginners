import Effort from "./effort";
import { EffortData } from "./types";

export default async function Page() {
  const years = await getYears();
  const effort = await getEffortData();
  return <Effort years={years} effort={effort} />;
}

async function getYears() {
  const years: number[] = [];
  for (let i = 2000; i < 2050; i++) {
    years.push(i);
  }
  return await Promise.resolve(years);
}

async function getEffortData(): Promise<EffortData> {
  return Promise.resolve({
    data: [
      {
        id: 1,
        spotName: "spot01",
        startDate: new Date(2024, 3, 21),
        endDate: new Date(2024, 4, 22),
        personMonth: 1,
        totalEffort: 2,
      },
      {
        id: 2,
        spotName: "spot02",
        startDate: new Date(2023, 4, 11),
        endDate: new Date(2024, 5, 12),
        personMonth: 3,
        totalEffort: 4,
      },
      {
        id: 3,
        spotName: "spot03",
        startDate: new Date(2022, 5, 15),
        endDate: new Date(2023, 6, 16),
        personMonth: 5,
        totalEffort: 6,
      },
      {
        id: 4,
        spotName: "spot04",
        startDate: new Date(2021, 7, 23),
        endDate: new Date(2022, 8, 22),
        personMonth: 7,
        totalEffort: 8,
      },
      {
        id: 5,
        spotName: "spot05",
        startDate: new Date(2023, 2, 21),
        endDate: new Date(2024, 10, 1),
        personMonth: 9,
        totalEffort: 10,
      },
    ],
  });
}

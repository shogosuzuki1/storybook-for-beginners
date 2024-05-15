import NightShift from "./night-shift";
import { AggregationPeriod, NightShiftData } from "./types";

export default async function Page() {
  const aggregationPeriod = await getAggregationPeriodData();
  const nightShift = await getNightShiftData();
  return (
    <NightShift aggregationPeriod={aggregationPeriod} nightShift={nightShift} />
  );
}

async function getAggregationPeriodData(): Promise<AggregationPeriod> {
  return Promise.resolve({
    data: {
      startDate: new Date(2024, 3, 1),
      endDate: new Date(2024, 3, 30),
    },
  });
}

async function getNightShiftData(): Promise<NightShiftData> {
  return Promise.resolve({
    data: [
      {
        id: 1,
        name: "name01",
        days: 5,
      },
      {
        id: 2,
        name: "name02",
        days: 4,
      },
      {
        id: 3,
        name: "name03",
        days: 3,
      },
      {
        id: 4,
        name: "name04",
        days: 2,
      },
      {
        id: 5,
        name: "name05",
        days: 1,
      },
    ],
  });
}

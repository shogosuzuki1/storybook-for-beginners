import PaidLeave from "./paid-leave";
import { PaidLeaveData } from "./types";

export default async function Page() {
  const paidLeave = await getPaidLeaveData();
  return <PaidLeave data={paidLeave.data} />;
}

async function getPaidLeaveData(): Promise<PaidLeaveData> {
  return Promise.resolve({
    data: [
      {
        id: 1,
        employeeName: "name01",
        aggregationStartDate: new Date(2024, 3, 21),
        aggregationEndDate: new Date(2024, 4, 22),
        numberOfPaidLeave: 1,
      },
      {
        id: 2,
        employeeName: "name02",
        aggregationStartDate: new Date(2023, 4, 11),
        aggregationEndDate: new Date(2024, 5, 12),
        numberOfPaidLeave: 3,
      },
      {
        id: 3,
        employeeName: "name03",
        aggregationStartDate: new Date(2022, 5, 15),
        aggregationEndDate: new Date(2023, 6, 16),
        numberOfPaidLeave: 5,
      },
      {
        id: 4,
        employeeName: "name04",
        aggregationStartDate: new Date(2021, 7, 23),
        aggregationEndDate: new Date(2022, 8, 22),
        numberOfPaidLeave: 7,
      },
      {
        id: 5,
        employeeName: "name05",
        aggregationStartDate: new Date(2023, 2, 21),
        aggregationEndDate: new Date(2024, 10, 1),
        numberOfPaidLeave: 9,
      },
    ],
  });
}

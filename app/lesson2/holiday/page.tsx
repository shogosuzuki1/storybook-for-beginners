import HolidayConfig from "./holiday-config";

export default async function Page() {
  const years = await getYears();
  const publicHolidayData = await getPublicHolidayData();
  const holidayData = await getHolidayData();
  return (
    <HolidayConfig
      years={years}
      publicHoliday={publicHolidayData}
      holiday={holidayData}
    />
  );
}

async function getYears() {
  const years: number[] = [];
  for (let i = 2000; i < 2050; i++) {
    years.push(i);
  }
  return await Promise.resolve(years);
}

async function getPublicHolidayData() {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        date: new Date("2024-01-02"),
        name: "正月休み",
      },
      {
        id: 2,
        date: new Date("2024-08-14"),
        name: "夏季休暇１",
      },
      {
        id: 3,
        date: new Date("2024-08-15"),
        name: "夏季休暇２",
      },
      {
        id: 4,
        date: new Date("2024-08-16"),
        name: "夏季休暇３",
      },
      {
        id: 5,
        date: new Date("2024-08-17"),
        name: "夏季休暇４",
      },
    ],
  });
}

async function getHolidayData() {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        date: new Date("2024-01-01"),
        name: "元日",
      },
      {
        id: 2,
        date: new Date("2024-01-08"),
        name: "成人の日",
      },
      {
        id: 3,
        date: new Date("2024-02-12"),
        name: "建国記念日",
      },
      {
        id: 4,
        date: new Date("2024-04-01"),
        name: "祝日１",
      },
      {
        id: 5,
        date: new Date("2024-05-02"),
        name: "祝日２",
      },
    ],
  });
}

import HolidayConfig from "./holiday-config";

export default async function Page() {
  const years = await getYears();
  const publicHolidayData = await getPublicHolidayData();
  const nationalHolidayData = await getNationalHolidayData();
  return (
    <HolidayConfig
      years={years}
      publicHolidays={publicHolidayData}
      nationalHolidays={nationalHolidayData}
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
        isNational: false,
      },
      {
        id: 2,
        date: new Date("2024-08-14"),
        name: "夏季休暇１",
        isNational: false,
      },
      {
        id: 3,
        date: new Date("2024-08-15"),
        name: "夏季休暇２",
        isNational: false,
      },
      {
        id: 4,
        date: new Date("2024-08-16"),
        name: "夏季休暇３",
        isNational: false,
      },
      {
        id: 5,
        date: new Date("2024-08-17"),
        name: "夏季休暇４",
        isNational: false,
      },
    ],
  });
}

async function getNationalHolidayData() {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        date: new Date("2024-01-01"),
        name: "元日",
        isNational: true,
      },
      {
        id: 2,
        date: new Date("2024-01-08"),
        name: "成人の日",
        isNational: true,
      },
      {
        id: 3,
        date: new Date("2024-02-12"),
        name: "建国記念日",
        isNational: true,
      },
      {
        id: 4,
        date: new Date("2024-04-01"),
        name: "祝日１",
        isNational: true,
      },
      {
        id: 5,
        date: new Date("2024-05-02"),
        name: "祝日２",
        isNational: true,
      },
    ],
  });
}

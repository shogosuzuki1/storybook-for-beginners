import Company from "./company";
import { EmployeeData, PartnerCompanyData } from "./types";

export default async function Page() {
  const employee = await getEmployeeData();
  const partnerCompany = await getPartnerCompanyData();
  return <Company employee={employee} partnerCompany={partnerCompany} />;
}

async function getEmployeeData(): Promise<EmployeeData> {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        name: "name01",
        email: "test1@example.com",
        phoneNumber: "000-0000-000",
      },
      {
        id: 2,
        name: "name02",
        email: "test2@example.com",
        phoneNumber: "000-0000-000",
      },
      {
        id: 3,
        name: "name03",
        email: "test3@example.com",
        phoneNumber: "000-0000-000",
      },
      {
        id: 4,
        name: "name04",
        email: "test4@example.com",
        phoneNumber: "000-0000-000",
      },
      {
        id: 5,
        name: "name05",
        email: "test5@example.com",
        phoneNumber: "000-0000-000",
      },
    ],
  });
}

async function getPartnerCompanyData(): Promise<PartnerCompanyData> {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        name: "company01",
        phoneNumber: "000-0000-000",
      },
      {
        id: 2,
        name: "company02",
        phoneNumber: "000-0000-000",
      },
      {
        id: 3,
        name: "company03",
        phoneNumber: "000-0000-000",
      },
      {
        id: 4,
        name: "company04",
        phoneNumber: "000-0000-000",
      },
      {
        id: 5,
        name: "company05",
        phoneNumber: "000-0000-000",
      },
    ],
  });
}

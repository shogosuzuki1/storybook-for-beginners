export interface EmployeeData {
  data: {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
  }[];
}

export interface PartnerCompanyData {
  data: {
    id: number;
    name: string;
    phoneNumber: string;
  }[];
}

export type VIEW_MODE = "employee" | "partner-company";

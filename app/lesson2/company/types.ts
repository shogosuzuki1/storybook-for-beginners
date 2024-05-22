export interface Employee {
  id: number;
  charIconId?: number;
  charIcon?: string;
  name: string;
  email: string;
  password: string;
  startDate: string;
  phoneNumber: string;
}

export interface PartnerCompany {
  id: number;
  charIcon?: string;
  name: string;
  phoneNumber: string;
}

export interface EmployeeData {
  data: Employee[];
}

export interface PartnerCompanyData {
  data: PartnerCompany[];
}

export type VIEW_MODE = "employee" | "partner-company";

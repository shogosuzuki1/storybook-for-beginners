export interface Holiday {
  id: number;
  date: Date;
  name: string;
  isNational: boolean;
}

export interface HolidayData {
  data: Holiday[];
}

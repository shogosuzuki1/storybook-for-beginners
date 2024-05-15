export interface NightShiftData {
  data: {
    id: number;
    name: string;
    days: number;
  }[];
}

export interface AggregationPeriod {
  data: {
    startDate: Date;
    endDate: Date;
  };
}

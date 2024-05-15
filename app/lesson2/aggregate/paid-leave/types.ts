export interface PaidLeaveData {
  data: {
    id: number;
    employeeName: string;
    aggregationStartDate: Date;
    aggregationEndDate: Date;
    numberOfPaidLeave: number;
  }[];
}

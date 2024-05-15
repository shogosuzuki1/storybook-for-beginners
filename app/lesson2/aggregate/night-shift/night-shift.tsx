import { Container, Paper, Typography } from "@mui/material";

import { dateFormatYYYYMMDDForSlashSplit } from "lib/format/format";

import NightShiftList from "./night-shift-table";
import { AggregationPeriod, NightShiftData } from "./types";

export default function NightShift({
  aggregationPeriod,
  nightShift,
}: Readonly<{
  aggregationPeriod: AggregationPeriod;
  nightShift: NightShiftData;
}>) {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="mb-4 text-center"
      >
        夜間勤務集計
      </Typography>
      <Paper elevation={0} className="mb-3 bg-blue-100 p-4">
        <Typography component="p">
          {`集計期間： ${dateFormatYYYYMMDDForSlashSplit(aggregationPeriod.data.startDate)} ~ ${dateFormatYYYYMMDDForSlashSplit(aggregationPeriod.data.endDate)}`}
        </Typography>
      </Paper>
      <NightShiftList data={nightShift.data} />
    </Container>
  );
}

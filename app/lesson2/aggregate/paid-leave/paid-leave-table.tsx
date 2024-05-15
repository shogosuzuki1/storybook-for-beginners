import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { dateFormatYYYYMMDDForHyphenSplit } from "lib/format/format";

import { PaidLeaveData } from "./types";

export default function PaidLeaveList({ data }: Readonly<PaidLeaveData>) {
  return (
    <Paper className="flex flex-col p-4">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>社員名</TableCell>
              <TableCell>集計期間</TableCell>
              <TableCell>有給取得日数</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell>{`${dateFormatYYYYMMDDForHyphenSplit(row.aggregationStartDate)} ~ ${dateFormatYYYYMMDDForHyphenSplit(row.aggregationEndDate)}`}</TableCell>
                <TableCell>{row.numberOfPaidLeave}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

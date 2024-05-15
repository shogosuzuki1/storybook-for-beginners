import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { dateFormatYYYYMMDDForSlashSplit } from "lib/format/format";

import { EffortData } from "./types";

export default function EffortList({ data }: Readonly<EffortData>) {
  return (
    <Paper className="flex flex-col p-4">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>現場名</TableCell>
              <TableCell>現場開始日時</TableCell>
              <TableCell>現場終了日時</TableCell>
              <TableCell>対象月の工数</TableCell>
              <TableCell>総工数</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.spotName}</TableCell>
                <TableCell>
                  {dateFormatYYYYMMDDForSlashSplit(row.startDate)}
                </TableCell>
                <TableCell>
                  {dateFormatYYYYMMDDForSlashSplit(row.endDate)}
                </TableCell>
                <TableCell>{row.personMonth}</TableCell>
                <TableCell>{row.totalEffort}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

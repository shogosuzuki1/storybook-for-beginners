import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { NightShiftData } from "./types";

export default function NightShiftList({ data }: Readonly<NightShiftData>) {
  return (
    <Paper className="flex flex-col p-4">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>社員名</TableCell>
              <TableCell>夜間勤務日数</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.days}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

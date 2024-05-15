import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { EmployeeData } from "./types";

export default function EmployeeList({ data }: Readonly<EmployeeData>) {
  return (
    <Paper className="flex flex-col p-4">
      <Button type="button" variant="contained" className="ml-auto">
        社員を登録
        <AddIcon />
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>社員名</TableCell>
              <TableCell>メールアドレス</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell align="right">
                  <Button type="button" variant="outlined">
                    編集
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

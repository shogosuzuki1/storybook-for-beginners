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

import { PartnerCompanyData } from "./types";

export default function PartnerCompanyList({
  data,
}: Readonly<PartnerCompanyData>) {
  return (
    <Paper className="flex flex-col p-4">
      <Button type="button" variant="contained" className="ml-auto">
        協力会社を登録
        <AddIcon />
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>協力会社名</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
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

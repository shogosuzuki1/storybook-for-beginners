import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { dateFormat } from "lib/format/format";

import { OrderData } from "./types";

export default function Orders({ data }: Readonly<OrderData>) {
  const amountTextAlign = "right";

  return (
    <Paper className="flex flex-col p-4">
      {/* Title */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align={amountTextAlign}>Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{dateFormat(row.date)}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align={amountTextAlign}>
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "USD",
                  }).format(row.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="#" variant="inherit" className="mt-6">
        See more orders
      </Link>
    </Paper>
  );
}

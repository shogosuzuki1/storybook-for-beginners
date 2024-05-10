import { Link, Paper, Typography } from "@mui/material";

import { amountFormat, dateFormat } from "lib/format/format";

import { DepositData } from "./types";

export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Paper className="flex h-60 flex-col p-4">
      {/* title */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <Typography component="p" variant="h4">
        {amountFormat(data.amount)}
      </Typography>
      <Typography component="p" className="flex-1" color="text.secondary">
        {`on ${dateFormat(data.date, true)}`}
      </Typography>
      <div>
        <Link href="#" variant="inherit">
          View balance
        </Link>
      </div>
    </Paper>
  );
}

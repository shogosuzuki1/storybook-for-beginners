import { Container, Typography } from "@mui/material";

import PaidLeaveList from "./paid-leave-table";
import { PaidLeaveData } from "./types";

export default function PaidLeave(paidLeave: Readonly<PaidLeaveData>) {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="mb-4 text-center"
      >
        有給休暇集計
      </Typography>
      <PaidLeaveList data={paidLeave.data} />
    </Container>
  );
}

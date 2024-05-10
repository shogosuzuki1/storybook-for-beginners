import { Container, Grid } from "@mui/material";

import Chart from "./chart";
import "./dashboard.css";
import Deposit from "./deposit";
import Orders from "./order";
import { ChartData, DepositData, OrderData } from "./types";

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={8} lg={9}>
          {/* chart  */} {/* deposits */}
          <Chart data={chart.data} />
        </Grid>
        <Grid item md={4} lg={3}>
          <Deposit data={deposit.data} />
        </Grid>
        {/* recent orders */}
        <Grid item xs={12}>
          <Orders data={order.data} />
        </Grid>
      </Grid>
    </Container>
  );
}

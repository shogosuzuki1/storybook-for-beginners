import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import "./default-assign.css";
import { WeekData } from "./type";

export default function DefaultAssign({ data }: Readonly<WeekData>) {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="mb-6 text-center"
      >
        デフォルトアサイン設定
      </Typography>
      <Paper className="flex flex-col p-8">
        <Grid container>
          <Grid xs={8}>
            <Container>
              <Typography
                component="h2"
                variant="body1"
                color="primary"
                className="font-bold"
              >
                休日/平日設定
              </Typography>
              <Box className="flex flex-wrap gap-2 py-4">
                {data.map((item) => (
                  <Box
                    key={item.id}
                    className={item.isHoliday ? "holiday" : "weekday"}
                  >
                    <Typography variant="subtitle1" className="text-center">
                      {item.name}
                    </Typography>
                    <Button variant="outlined" className="h-24 w-40 font-bold">
                      {item.isHoliday ? "休日" : "平日"}
                    </Button>
                  </Box>
                ))}
              </Box>
              <Typography component="p">
                曜日をクリックすると平日と休日を切り替えることができます。
              </Typography>
              <Typography component="p">
                休日として設定された曜日はデフォルトで休に配置されます。
              </Typography>
            </Container>
          </Grid>
          <Grid xs={4}>
            <Container>
              <Typography
                component="h2"
                variant="body1"
                color="primary"
                className="pb-4 font-bold"
              >
                平日アサイン先
              </Typography>
              <TextField label="名称" fullWidth />
            </Container>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" className="ml-auto">
          変更を保存
        </Button>
      </Paper>
    </Container>
  );
}

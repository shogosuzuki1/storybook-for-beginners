import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import HolidayTable from "./holiday-table";
import { HolidayData } from "./types";

export default function HolidayConfig({
  years = [],
  publicHoliday,
  holiday,
}: Readonly<{
  years: number[];
  publicHoliday: HolidayData;
  holiday: HolidayData;
}>) {
  return (
    <Container className="flex flex-col gap-y-5">
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="text-center"
      >
        カレンダー休日設定
      </Typography>
      <Box className="flex">
        <Box component="form" className="flex items-center">
          <FormControl size="small">
            <Select defaultValue={new Date().getFullYear()}>
              {years.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}年
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined" className="ml-2">
            表示
          </Button>
        </Box>
        <Button type="button" variant="contained" className="ml-auto">
          休日を登録
          <AddIcon />
        </Button>
      </Box>
      <Grid container>
        <Grid item sm={3}>
          <Typography component="h2" variant="h6">
            公休
          </Typography>
        </Grid>
        <Grid item sm={9}>
          <HolidayTable data={publicHoliday.data} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={3}>
          <Typography component="h2" variant="h6">
            祝日
          </Typography>
        </Grid>
        <Grid item sm={9}>
          <HolidayTable data={holiday.data} />
        </Grid>
      </Grid>
    </Container>
  );
}

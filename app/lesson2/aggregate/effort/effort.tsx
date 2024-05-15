import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import EffortList from "./effort-table";
import { EffortData } from "./types";

export default function Effort({
  years = [],
  effort,
}: Readonly<{ years: number[]; effort: EffortData }>) {
  const now = new Date();
  const monthListElement = () => {
    const elements = [];
    for (let i = 1; i <= 12; i++) {
      elements.push(
        <MenuItem key={i} value={i}>
          {i}月
        </MenuItem>,
      );
    }
    return elements;
  };

  return (
    <Container>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="mb-4 text-center"
      >
        工数集計
      </Typography>
      <Box className="mb-3 flex">
        <Box component="form" className="flex items-center gap-x-2">
          <FormControl size="small">
            <Select defaultValue={now.getFullYear()}>
              {years.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}年
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small">
            <Select defaultValue={now.getMonth() + 1}>
              {monthListElement()}
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            表示
          </Button>
        </Box>
      </Box>
      <EffortList data={effort.data} />
    </Container>
  );
}

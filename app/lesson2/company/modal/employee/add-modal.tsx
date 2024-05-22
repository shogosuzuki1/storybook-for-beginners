"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import Circle from "./circle/circle";

export default function Modal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title" color="primary">
        社員追加
      </DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 12,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box component="form" className="m-4 flex flex-col gap-4">
          <TextField required fullWidth label="社員名（必須）" />
          <TextField required fullWidth label="略称一文字（必須）" />
          <FormControl>
            <FormLabel id="radio-label">アイコン色</FormLabel>
            <RadioGroup aria-labelledby="radio-label" defaultValue={0}>
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="カレンダーに表示しない"
              />
              <Box className="flex flex-wrap">
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label={<Circle>な</Circle>}
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label={<Circle>な</Circle>}
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label={<Circle>な</Circle>}
                />
                <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label={<Circle>な</Circle>}
                />
                <FormControlLabel
                  value={5}
                  control={<Radio />}
                  label={<Circle>な</Circle>}
                />
              </Box>
            </RadioGroup>
          </FormControl>
          <TextField required fullWidth label="ログインID（必須）" />
          <TextField required fullWidth label="パスワード（必須）" />
          <TextField required fullWidth label="入社日（必須）" />
          <TextField fullWidth label="電話番号" />
          <DialogActions className="mt-8">
            <Button type="button" onClick={handleClose}>
              キャンセル
            </Button>
            <Button type="submit" variant="contained">
              社員を登録
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

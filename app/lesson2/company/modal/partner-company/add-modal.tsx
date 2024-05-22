"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

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
        協力会社追加
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
          <TextField required fullWidth label="協力会社名（必須）" />
          <TextField required fullWidth label="略称一文字（必須）" />
          <TextField fullWidth label="電話番号" />
          <DialogActions className="mt-8">
            <Button type="button" onClick={handleClose}>
              キャンセル
            </Button>
            <Button type="submit" variant="contained">
              協力会社を登録
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

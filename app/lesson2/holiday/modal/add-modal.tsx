"use client";

import { AddCircle, RemoveCircle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function AddModal() {
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
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title" color="primary">
        カレンダー休日追加
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
          <Box className="flex gap-4">
            <TextField required fullWidth label="日付（必須）" />
            <TextField required fullWidth label="休日名（必須）" />
            <FormControlLabel
              control={<Checkbox />}
              label={<span className="whitespace-nowrap">祝日</span>}
            />
            <Box className="ml-auto flex items-center justify-center">
              <IconButton>
                <RemoveCircle color="error" />
              </IconButton>
            </Box>
          </Box>
          <IconButton className="ml-auto">
            <AddCircle color="primary" />
          </IconButton>
          <DialogActions className="mt-8">
            <Button type="button" onClick={handleClose}>
              キャンセル
            </Button>
            <Button type="submit" variant="contained">
              休日を登録
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

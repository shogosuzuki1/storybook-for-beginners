"use client";

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormState } from "react-dom";

import { loginAction } from "lib/actions/auth";
import { validation } from "lib/validations/auth";

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: "onBlur",
  });
  return (
    <Box component="main" className="h-screen flex-grow overflow-auto">
      <Grid container className="h-screen">
        <Grid item lg={4} md={4} className="bg-gray-400"></Grid>
        <Grid item lg={8} md={8} className="flex items-center">
          <Box className="m-16 flex flex-col items-center">
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              className="font-bold"
            >
              業務管理システム
            </Typography>
            <Box
              component="form"
              action={action}
              {...getFormProps(form)}
              className="mt-2"
            >
              <TextField
                margin="normal"
                fullWidth
                label="メールアドレス"
                autoComplete="email"
                {...getInputProps(fields.email, { type: "email" })}
                key={fields.email.key}
                error={!!fields.email.errors}
                helperText={fields.email.errors}
                placeholder="example@example.com"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="パスワード"
                autoComplete="current-password"
                {...getInputProps(fields.password, { type: "password" })}
                key={fields.password.key}
                error={!!fields.password.errors}
                helperText="パスワードを忘れた方は管理者にご連絡ください"
              />
              {form.errors && (
                <div className="text-center text-red-600">{form.errors}</div>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="mb-4 mt-6"
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

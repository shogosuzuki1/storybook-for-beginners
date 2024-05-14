"use client";

import { jaJP } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { Noto_Sans_JP } from "next/font/google";
import { setErrorMap } from "zod";

import customErrorMap from "lib/validations";

setErrorMap(customErrorMap);

const notoSansJp = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme(
  {
    typography: {
      fontFamily: notoSansJp.style.fontFamily,
    },
  },
  jaJP,
);

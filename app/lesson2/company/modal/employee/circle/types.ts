import { ReactNode } from "react";

export type COLOR = "pink" | "yellow" | "blue" | "black" | "white";

export interface Props {
  children?: ReactNode;
  color?: COLOR;
}

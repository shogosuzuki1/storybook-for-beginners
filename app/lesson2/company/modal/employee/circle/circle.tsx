import { Props } from "./types";

export default function Circle({ children }: Props) {
  return (
    <div className="flex size-10 items-center justify-center rounded-full bg-blue-300">
      {children}
    </div>
  );
}

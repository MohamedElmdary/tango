import { Gradient } from "./gradient";

class Color {
  constructor(
    public main: string | Gradient,
    public accent: string,
    public warn: string,
  ) {}
}

export type ColorsType = { [key: string]: string | Gradient | Color };

export { Color };

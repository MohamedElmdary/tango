import { Gradient } from "./gradient";

class Color<T> {
  constructor(
    /* \n */
    public primary: T,
    public accent: string,
    public warn: string,
  ) {}
}

export type ColorsType = {
  bg: Color<Gradient>;
  icon: string;
  activeIcon: string;
  txt: Color<string>;
  green: string;
  red: string;
  divider: string;
};

export { Color };

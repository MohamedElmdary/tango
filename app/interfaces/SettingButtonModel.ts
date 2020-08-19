import { Gradient } from "./gradient";

class SettingButtonModel {
  constructor(
    /* \n */
    public title: string,
    public bg: Gradient,
    public icon: JSX.Element,
  ) {}
}

export { SettingButtonModel };

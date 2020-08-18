import { ColorsType, Gradient, Color } from "../interfaces";

const Colors: ColorsType = {
  bg: new Color(
    new Gradient(
      /* \n */
      ["#21223D", "#464765"],
      { x: 1, y: -1 },
      { x: 2, y: 0.9 },
    ),
    "#5C4DF7",
    "#3F4164",
  ),
  icon: "#6B6D93",
  activeIcon: "#6385E6",
  txt: new Color(
    /* \n */
    "white",
    "#6E6F86",
    "rgba(255, 255, 255, .5457)",
  ),
  green: "#11B753",
  red: "#CC0015",
};

export { Colors };

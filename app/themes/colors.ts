import { ColorsType, Gradient, Color } from "../interfaces";

const Colors: ColorsType = {
  bg: new Color(
    /* \n */
    new Gradient(["#21223D", "#464765"]),
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

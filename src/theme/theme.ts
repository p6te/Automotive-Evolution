export type ThemeType = typeof light; // This is the type definition for my theme object.
export enum ThemeVersions {
  light,
  dark,
}

export const light = {
  primary: "#A9927D",
  secondary: "#5E503F",
  tertiary: "#22333B",
  background: "#F2F4F3",
  text: "#0A0908",
};
export const dark: ThemeType = {
  primary: "#22333B",
  secondary: "#5E503F",
  tertiary: "#A9927D",
  background: "#3A3A39",
  text: "#F2F4F3",
};

const theme = light;
export default theme;

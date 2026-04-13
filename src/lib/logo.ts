
export type LogoBackgroundColor = "light" |
  "dark" |
  "gray" |
  null;

export type Logo = {
  url: string;
  background_color?: LogoBackgroundColor;
};

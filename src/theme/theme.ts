// подумал норм идея попробовать
export interface ITheme {
  theme: {
    titleColor: string;
    textColor: string;
    mainBgColor: string;
    maxZIndex: string;
  };
}

export const theme: ITheme["theme"] = {
  titleColor: "#222222",
  textColor: "#333333",
  mainBgColor: "#222222",
  maxZIndex: "2023"
};

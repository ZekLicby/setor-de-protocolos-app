export const theme = {
  colors: {
    primary: {
      "100": "#690013",
    },

    secondary: {},

    neutral: {
      "010": "#A6A6A6",
      black: "#000",
      white: "#fff",
    },
  },

  typography: {
    fontSize: {
      xxxs: "11px",
      xxs: "12px",
      xs: "14px",
      s: "15px",
      m: "16px",
      l: "18px",
      xl: "20px",
      xxl: "22px",
      xxxl: "24px",
    },

    fontWeight: {
      "100": 100,
      "200": 200,
      "300": 300,
      "400": 400,
      "500": 500,
      "600": 600,
      "700": 700,
      "800": 800,
      "900": 900,
    },
  },
};

export type ThemeType = typeof theme;

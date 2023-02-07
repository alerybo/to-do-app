import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    backgroundPrimary: "#E8F0EF",
    backgroundSecondary: "#DBE3E4",
    textPrimary: "#3B3B3B",
    textSecondary: "#8D8D8D",
    textOptional: "#616161",
    white: "#FCFCFC",
    greenAccent: "#CAF5E0",
    pinkAccent: "#FCD4CA",
    yellowAccent: "#FCE1A5",
    greyAccent: "#EEEEEE",
  },
  fontSizes: {
    base: "1rem",
    title: "1.5rem",
    small: "0.875rem",
    smaller: "0.6875rem",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

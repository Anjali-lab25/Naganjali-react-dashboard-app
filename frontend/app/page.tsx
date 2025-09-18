"use client";

import { Dashboard } from "@/components/Dashboard.component";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}




import { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [dark, setDark] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: dark ? "#fff" : "#222",
      },
      secondary: {
        main: dark ? "#fff" : "#222",
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      type: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar setDark={setDark} dark={dark} />
    </ThemeProvider>
  );
}

export default App;

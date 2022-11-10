import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Phantom from "./components/Phantom";
import Map from "./components/Map";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Phantom />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
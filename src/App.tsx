import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Phantom from "./components/Phantom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Phantom />
    </ThemeProvider>
  );
}

export default App;

import { Box } from "@mui/material";
import Header from "../../layouts/Header";
import Main from "./Main";

const Phantom = () => {
  return (
    <Box minHeight="100vh" display="flex">
      <Header />

      <Main />
    </Box>
  );
};

export default Phantom;

import { Box, Typography, Button, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { ReactComponent as PhantomLogo } from "../../assets/phantom.svg";
import { ReactComponent as PhantomText } from "../../assets/phantom_text.svg";
import theme from "../../theme";

const PurpleButton = styled(Button)({
  marginBottom: 10,
  width: "100%",
  background: "#4E44CE",
  padding: "10px 0",
  fontSize: "16px",
  color: theme.color.white,
  "&:hover": {
    background: theme.color.purple,
  },
});

const DarkButton = styled(Button)({
  background: "#333333",
  width: "100%",
  color: theme.color.white,
  textTransform: "none",
  padding: "10px 0",
  fontSize: "16px",
  "&:hover": {
    background: theme.color.lightGray,
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.subHeader}></Box>
      <Box className={classes.main}>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="flex-start"
          justifyContent="space-between"
          height="100%"
        >
          <Box
            mt="40px"
            mb="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <PhantomLogo />
            <PhantomText style={{ margin: "20px 0" }} />
            <Typography
              color="#999"
              fontSize={17}
              textAlign="center"
            >{`A crypto wallet reimagined for DeFi & NFTs`}</Typography>
          </Box>

          <Box width="100%">
            <PurpleButton>Create a new wallet</PurpleButton>
            <DarkButton>I already have a wallet</DarkButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 420,
    height: 480,
    position: "relative",
    overflow: "hidden",
    background: "#222222",
    border: "1px solid rgb(50, 50, 50)",
    borderRadius: 8,
    boxShadow: "rgb(0 0 0 / 30%) 0px 10px 20px",
    margin: "auto",
  },
  subHeader: {
    width: "100%",
    height: "46px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  main: {
    display: "flex",
    height: "calc(394px)",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default Main;

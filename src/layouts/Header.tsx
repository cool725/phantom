import { Box, Typography, SvgIcon, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GreyLogo from "../assets/grey_logo.png";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 40px",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#252525",
    borderRadius: 100,
    height: 40,
    width: 181,
  },
  help: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#AAAAAA",
    textDecoration: "none",
    padding: "10px 0",
    "&.makeStyles-help-3:hover": {
      color: theme.color.white,
    },
    "& .MuiTypography-root:hover": {
      color: theme.color.white,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.logo}>
        <img src={GreyLogo} alt="logo" width={22} />
        <Box display="flex" alignItems="baseline">
          <Typography
            mr="6px"
            ml="10px"
            fontWeight={700}
            fontFamily={`Circular, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`}
          >
            Phantom
          </Typography>
          <Typography color="#8A81F8" fontSize={15} fontWeight={500}>
            Beta!
          </Typography>
        </Box>
      </Box>

      <a href="/help" target="_blank" className={classes.help}>
        <SvgIcon viewBox="0 0 15 15" style={{ width: 18 }}>
          <HelpRoundedIcon />
        </SvgIcon>
        <Typography color="#AAA" ml="8px" fontSize={16} fontWeight={500}>
          Help
        </Typography>
      </a>
    </Box>
  );
};

export default Header;

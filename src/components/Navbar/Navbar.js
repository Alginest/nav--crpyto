import {
  AppBar,
  Container,
  Link,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import BitCoinLogo from "../../images/BTC_Logo.svg";
const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: "#fff",
  },
  AppBar: {
    height: "100px",
  },
  bigCont: {
    height: "inherit",
    alignItems: "center",
  },
  toolbar: {
    height: "inherit",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  list: {
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  link: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#f7931a",
    },
  },
  img: {
    width: 50,
    height: 50,
  },
}));
const Navbar = ({ setDark, dark }) => {
  const [switchState, setSwitchState] = React.useState(false);
  const classes = useStyles();
  const handleChange = () => {
    setSwitchState(!switchState);
    setDark(!dark);
  };

  return (
    <section className="nav">
      <AppBar
        color="transparent"
        position="static"
        elevation={0}
        className={classes.AppBar}
      >
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} color="secondary" variant="h4">
              <img src={BitCoinLogo} alt="" className={classes.img} />
              <Typography
                variant="h4"
                component="span"
                style={{ marginLeft: 5 }}
              >
                icon
              </Typography>
            </Typography>
            <div className={classes.list}>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/about"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Service
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Shop
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </div>
            <Switch
              checked={switchState}
              onChange={handleChange}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
              }}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default Navbar;

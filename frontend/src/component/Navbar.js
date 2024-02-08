import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CareerForge
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button className={classes.buttons} color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

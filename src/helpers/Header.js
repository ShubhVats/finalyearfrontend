import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as Linker } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Logo from "../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const getUserData = async () => {
    const user = await getAuth();
    if (user != null) {
      try {
        console.log(setAuthText(user.currentUser.displayName));
        // setStatus(true)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signOutBtn = async () => {
    const result = await onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setStatus(true);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    getUserData();
    signOutBtn();
  }, [getUserData]);

  const [status, setStatus] = useState(false);
  const [authText, setAuthText] = useState("Sign IN");
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Linker to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "6vh",
              filter:
                "invert(0%) sepia(0%) saturate(0%) hue-rotate(308deg) brightness(98%) contrast(101%)",
            }}
          />

          <Button size="small"> Career Headstart </Button>
        </Linker>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        {status ? (
          <>
            <Button variant="outlined" size="small">
              {authText}
            </Button>
            {/* TODO Add a Split button from mui */}
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                signOut(getAuth());
                setStatus(false);
                setAuthText("Sign IN");
              }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <div>
            {" "}
            <Linker to="/SignInSide">
              <Button variant="outlined" size="small">
                {authText}
              </Button>
            </Linker>
          </div>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

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

  var url = "";

  useEffect(() => {
    getUserData();
    signOutBtn();

    url = window.location.href;
  }, [getUserData]);

  const sections = [
    {
      title: "Top Universities",
      url: `${url}UniversityData`,
      date: "Nov 12",
      description:
        "Discover the top universities around the world with the World University Rankings 2022, or go in depth on a particular region with the QS World University Rankings by Region 2022.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageText: "Image Text",
    },
    {
      title: "Top Courses",
      url: `${url}TopCourses`,
      date: "Nov 11",
      description:
        "Choosing the Right Course for the Career is the most crucial decision to make and can be troublesome if not guided properly. In the current scenario with so many available options for courses and tough competition, it is very hard and confusing to decide for both students and parents. With so many influential people around, we often get swayed or simply do what is told by our parents.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageText: "Image Text",
    },
    {
      title: "Upcoming Exams",
      url: `${url}Exams`,
      date: "Nov 11",
      description:
        "Govt. Jobs: The number of Government job aspirants is increasing at an alarming rate in India. More and more aspirants are applying for Government job posts each year.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageText: "Image Text",
    },
    {
      title: "Admission 2021",
      url: `${url}UniversityData`,
      date: "Nov 12",
      description:
        "Use our course matching tool to narrow down your study choices, or sign up for one of our worldwide in-person or virtual events and get the chance to meet representatives from the world's top universities.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageText: "Image Text",
    },
    {
      title: "eLearning",
      url: `${url}eLearning`,
      date: "Nov 11",
      description:
        "eLearning Learning is a collection of the leading industry thought leadership in the form of blogs, webinars, and downloadable resources, on one convenient website. We use reader data to auto-curate the articles, meaning that the most valuable resources move to the top. Additionally, you can sign up for our Daily or Weekly newsletters to receive these top-ranked articles right in your inbox, or you can sign up to be notified when new resources like webinars or ebooks are available.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageText: "Image Text",
    },
  ];

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
        ></Typography>

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

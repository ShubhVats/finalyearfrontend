import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ScrollToTop from "../helpers/ScrollToTop";
import { Button, Input } from "@material-ui/core";

function GetPhoneNumber() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>EmailID</div>
      <Input type="email" placeholder="shubhvats@gmail.com"></Input>
      <div>+91</div>
      <Input type="email" placeholder="9717002522"></Input>
      <div>Course</div>
      <Input type="email" placeholder="B.Tech"></Input>
      <Button variant="outlined">Submit</Button>
      <ScrollToTop />
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit">SMART EDUCATION FOR UNDERGRADUATES</Link> <br />
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <GetPhoneNumber />

        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

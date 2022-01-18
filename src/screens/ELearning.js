import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";

import Header from "../helpers/Header";

export default function ELearning() {
  const [collegeData, setCollegeData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://careerheadstart.herokuapp.com/Datas/")
      .then((res) => {
        console.log(res.data);
        setCollegeData(res.data);
      })
      .catch((err) => "Error: " + err);
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

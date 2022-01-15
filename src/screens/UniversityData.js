import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Header from "../helpers/Header";
import SimpleModal from "../helpers/CollegeInfoModal";

const sections = [
  {
    title: "Top Universities",
    url: "http://localhost:3000/UniversityData",
    date: "Nov 12",
    description:
      "Discover the top universities around the world with the World University Rankings 2022, or go in depth on a particular region with the QS World University Rankings by Region 2022.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageText: "Image Text",
  },
  {
    title: "Top Courses",
    url: "http://localhost:3000/TopCourses",
    date: "Nov 11",
    description:
      "Choosing the Right Course for the Career is the most crucial decision to make and can be troublesome if not guided properly. In the current scenario with so many available options for courses and tough competition, it is very hard and confusing to decide for both students and parents. With so many influential people around, we often get swayed or simply do what is told by our parents.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageText: "Image Text",
  },
  {
    title: "Upcoming Exams",
    url: "http://localhost:3000/Exams",
    date: "Nov 11",
    description:
      "Govt. Jobs: The number of Government job aspirants is increasing at an alarming rate in India. More and more aspirants are applying for Government job posts each year.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageText: "Image Text",
  },
  {
    title: "Admission 2021",
    url: "http://localhost:3000/UniversityData",
    date: "Nov 12",
    description:
      "83,075 MBBS seats recognized by the National Medical Commission (NMC) every year",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageText: "Image Text",
  },
  {
    title: "eLearning",
    url: "http://localhost:3000/eLearning",
    date: "Nov 11",
    description:
      "eLearning Learning is a collection of the leading industry thought leadership in the form of blogs, webinars, and downloadable resources, on one convenient website. We use reader data to auto-curate the articles, meaning that the most valuable resources move to the top. Additionally, you can sign up for our Daily or Weekly newsletters to receive these top-ranked articles right in your inbox, or you can sign up to be notified when new resources like webinars or ebooks are available.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageText: "Image Text",
  },
];

export default function Data() {
  const [collegeData, setCollegeData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:5000/Datas/")
      .then((res) => {
        console.log(res.data);
        setCollegeData(res.data);
      })
      .catch((err) => "Error: " + err);
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Header sections={sections} />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course</TableCell>
                <TableCell align="right">College</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(collegeData).map((value) => {
                return (
                  <TableRow
                    onClick={() => {
                      console.log(value["State"]);
                    }}
                    key={value.username}
                  >
                    <TableCell component="th" scope="row">
                      {value.datasname}
                    </TableCell>
                    <TableCell align="right">
                      {value["Date/Year of Notification/ Establishment"]}
                    </TableCell>
                    <TableCell align="right">{value.Address}</TableCell>
                    <TableCell align="right">{value.State}</TableCell>
                    <TableCell align="right">
                      <SimpleModal
                        name={value["Institute Name"]}
                        Specialization={value.Specialization}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

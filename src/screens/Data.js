import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import SimpleModal from "../helpers/CollegeInfoModal";

export default function Data() {
  const [collegeData, setCollegeData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://careerheadstart.herokuapp.com/users/")
      .then((res) => {
        console.log(res.data);
        setCollegeData(res.data);
      })
      .catch((err) => "Error: " + err);
  }, []);
  return (
    <div>
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
                    console.log(value["Institute Name"]);
                  }}
                  key={value.username}
                >
                  <TableCell component="th" scope="row">
                    {value.Program}
                    <br />
                    {value.Specialization}
                  </TableCell>
                  <TableCell align="right">{value["Institute Name"]}</TableCell>
                  <TableCell align="right">{value["Inst Address"]}</TableCell>
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
    </div>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

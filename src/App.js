import {
  Input,
  Button,
  TableContainer,
  Paper,
  TableBody,
  Table,
} from "@material-ui/core";

import "./App.css";

import { connect, useSelector, useDispatch } from "react-redux";
import { getRepoData } from "./Store/Action/Action";
import { useState } from "react";
import User from "./Components/User";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  return (
    <>
      <Router>
        <div className="App ">
          <div className="main">
            <h1> Github Repo</h1>
            <Input
              placeholder="Search Github Repo"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => dispatch(getRepoData(query))}
            >
              Get
            </Button>
          </div>{" "}
          <div className="compare">
            <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={User}
                position="top"
              >
                Compare User
              </Button>
            </Link>
          </div>
        </div>
        <div className="repo-data">
          {storeData.repoData
            ? storeData.repoData.map((item, i) => {
                return (
                  <TableContainer className="tableContainer">
                    <Table className="table" aria-label="customized table">
                      <TableBody>
                        {" "}
                        <a href={item.clone_url} target="blank">
                          {item.clone_url}
                        </a>
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              })
            : null}
        </div>
      </Router>
    </>
  );
}

export default connect()(App);

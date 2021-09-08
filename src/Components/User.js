import { useState } from "react";
import "../App.css";
import App from "../App";

import { connect, useSelector, useDispatch } from "react-redux";
import { getUserData, getUser2Data } from "../Store/Action/Action";
import { Input } from "@material-ui/core";

import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function User(props) {
  const storeUser = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [query2, setQuery2] = useState("");
  console.log(storeUser);
  function btnClick() {
    dispatch(getUserData(input));
    dispatch(getUser2Data(query2));
  }

  return (
    <div className="user">
      <h1> Github User</h1>
      <br />

      <form className="from">
        <Input
          placeholder="Search User 1"
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <Input
          placeholder="Search User 2"
          onChange={(e) => setQuery2(e.target.value)}
        />
        <br />
        <br />
        <div className="get">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={btnClick}
          >
            Get User
          </Button>

          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={App}
            >
              Search Repo
            </Button>
          </Link>
        </div>
      </form>

      <div className="container">
        <div className="card_item">
          <div className="card_inner">
            <img className src={storeUser.user_data.avatar_url} />
            <div className="userName">{storeUser.user_data.login}</div>
            <div className="userUrl">{storeUser.user_data.bio}</div>
            <div className="detail-box">
              <div className="gitDetail">
                <span>Repository</span>
                {storeUser.user_data.public_repos}
              </div>
              <div className="gitDetail">
                <span>Following</span>
                {storeUser.user_data.following}
              </div>
              <div className="gitDetail">
                <span>Followers</span>
                {storeUser.user_data.followers}
              </div>
            </div>
            <button className="seeMore">
              {" "}
              <a
                href={storeUser.user_data.html_url}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                See More
              </a>
            </button>
          </div>
        </div>
        <div className="card_item">
          <div className="card_inner">
            <img className src={storeUser.user2_data.avatar_url} />
            <div className="userName">{storeUser.user2_data.login}</div>
            <div className="userUrl">{storeUser.user2_data.bio}</div>
            <div className="detail-box">
              <div className="gitDetail">
                <span>Repository</span>
                {storeUser.user2_data.public_repos}
              </div>
              <div className="gitDetail">
                <span>Following</span>
                {storeUser.user2_data.following}
              </div>
              <div className="gitDetail">
                <span>Followers</span>
                {storeUser.user2_data.followers}
              </div>
            </div>
            <button className="seeMore">
              {" "}
              <a
                href={storeUser.user2_data.html_url}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                See More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(User);

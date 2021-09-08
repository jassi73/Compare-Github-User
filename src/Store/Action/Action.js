import axios from "axios";

const get_repo_request = () => ({
  type: "GET_REPO_REQUEST",
});

const get_repo_succcess = (data) => ({
  type: "GET_REPO_SUCCESS",
  data: data,
});

const get_repo_failed = () => ({
  type: "GET_REPO_FAILED",
});

const get_user_request = () => ({
  type: "GET_USER_REQUEST",
});

const get_user_success = (data) => ({
  type: "GET_USER_SUCCESS",
  data: data,
});

const get_user_failed = () => ({
  type: "GET_USER_FAILED",
});

const get_user2_request = () => ({
  type: "GET_USER2_REQUEST",
});
const get_user2_success = (data) => ({
  type: "GET_USER2_SUCCESS",
  data: data,
});
const get_user2_failed = () => ({
  type: "GET_USER2_FAILED",
});

export const getRepoData = (query) => {
  return (dispatch) => {
    try {
      dispatch(get_repo_request());

      axios
        .get(`https://api.github.com/search/repositories?q=topic:${query}`)
        .then((res) => {
          dispatch(get_repo_succcess(res.data.items));
        })
        .catch((err) => {
          dispatch(get_repo_failed());
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserData = (input) => {
  return (dispatch) => {
    try {
      dispatch(get_user_request());

      axios
        .get(`https:/api.github.com/users/${input}`)
        .then((res) => {
          dispatch(get_user_success(res.data));
        })
        .catch((err) => {
          dispatch(get_user_failed());
        });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUser2Data = (input) => {
  return (dispatch) => {
    try {
      dispatch(get_user2_request());

      axios
        .get(`https:/api.github.com/users/${input}`)
        .then((res) => {
          dispatch(get_user2_success(res.data));
        })
        .catch((err) => {
          dispatch(get_user2_failed());
        });
    } catch (error) {
      console.log(error);
    }
  };
};

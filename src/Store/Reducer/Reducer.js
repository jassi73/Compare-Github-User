const initialState = {
  request: false,
  success: false,
  error: false,
  repoData: [],
  user_request: false,
  user_success: false,
  user_failed: false,
  user_data: {},
  user2_request: false,
  user2_success: false,
  user2_failed: false,
  user2_data: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REPO_REQUEST":
      return {
        ...state,
        request: true,
        success: false,
        error: false,
        repoData: [],
      };
    case "GET_REPO_SUCCESS":
      return {
        ...state,
        request: false,
        success: true,
        error: false,
        repoData: action.data,
      };
    case "GET_REPO_FAILED":
      return {
        ...state,
        request: false,
        success: false,
        error: true,
        repoData: [],
      };
    case "GET_USER_REQUEST":
      return {
        ...state,
        user_request: true,
        user_success: false,
        user_failed: false,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user_request: false,
        user_success: true,
        user_failed: false,
        user_data: action.data,
      };
    case "GET_USER_FAILED":
      return {
        ...state,
        user_request: false,
        user_success: false,
        user_failed: true,
      };
    case "GET_USER2_REQUEST":
      return {
        ...state,
        user2_request: true,
        user2_success: false,
        user2_failed: false,
      };
    case "GET_USER2_SUCCESS":
      return {
        ...state,
        user2_request: false,
        user2_success: true,
        user2_failed: false,
        user2_data: action.data,
      };
    case "GET_USER2_FAILED":
      return {
        ...state,
        user2_request: false,
        user2_success: false,
        user2_failed: true,
      };
    default:
      return state;
  }
};

export default Reducer;

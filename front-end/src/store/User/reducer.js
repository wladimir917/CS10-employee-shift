const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_USER":
      return { ...state, isLoading: true };

    case "FETCHED_USER":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user,
      };

    case "SIGNIN_SUCCESS":
      localStorage.setItem("token", action.data.token);
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };

    case "SIGNOUT_SUCCESS":
      localStorage.removeItem("token");
      return {
        ...state,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};

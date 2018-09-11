const initialState = {
  // TODO: fill me
};

export default (state = initialState, action) => {
  switch (action.type) {
    // TODO: fill me

    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};

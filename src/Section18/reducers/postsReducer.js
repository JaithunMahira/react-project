const postsReducer = (state = [], action) => {
  //Use switch as we may have many action types
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;

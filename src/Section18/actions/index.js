import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //to wait for the API call to finish
  //   const uniqueUserIds = _.uniq(_.map(getState().posts, "userId"));

  //   uniqueUserIds.forEach((userId) => {
  //     dispatch(fetchUser(userId));
  //   });

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((userId) => dispatch(fetchUser(userId)))
    .value();
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//memoized version of the fetchUsers function - prob? cannot refetch when response data is changed
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

//The above is similar to the below syntax
// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//       const response = await jsonPlaceholder.get("/posts");

//       //dispatch the response after the response is received
//       dispatch({ type: "FETCH_POSTS", payload: response });
//       //cannot return object when return function from action creator
//       // return {
//       //   type: "FETCH_POSTS",
//       //   payload: response,
//       // };
//     };
//   };

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const FETCHED_JOBS = "FETCHED_JOBS";

export const addToFavorites = (jobPost) => ({
  type: ADD_TO_FAVORITES,
  payload: jobPost,
});

export const removeFromFavorites = (i) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: i,
});

export const fetchSearchedJobsAction = (e, searchQuery) => {
  if (e.key !== "Enter") return;
  console.log(searchQuery);
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        //dispatch data here
        dispatch({
          type: FETCHED_JOBS,
          payload: data.data,
        });
      } else {
        alert("something wrong with the data");
        //dispatch error here
      }
    } catch (error) {
      console.log(error);
      //dispatch error here
    }
  };
};

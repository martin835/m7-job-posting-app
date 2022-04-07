import { initialState } from "../store";
import { FETCHED_JOBS, THROW_ERROR, SET_LOADING } from "../actions";

const fetchedJobsReducer = (state = initialState.fetchedJobs, action) => {
  switch (action.type) {
    //actions go here
    case FETCHED_JOBS:
      return {
        ...state,
        searchedJobs: action.payload,
      };

    case THROW_ERROR:
      return {
        ...state,
        isError: true,
      };

    case SET_LOADING:
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
};

export default fetchedJobsReducer;

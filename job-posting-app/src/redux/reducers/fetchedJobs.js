import { initialState } from "../store";
import { FETCHED_JOBS } from "../actions";

const fetchedJobsReducer = (state = initialState.fetchedJobs, action) => {
  switch (action.type) {
    //actions go here
    case FETCHED_JOBS:
      return {
        ...state,
        searchedJobs: action.payload,
      };

    default:
      return state;
  }
};

export default fetchedJobsReducer;

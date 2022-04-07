import { initialState } from "../store";

const allJobsReducer = (state = initialState.allJobs, action) => {
  switch (action.type) {
    //actions go here

    default:
      return state;
  }
};

export default allJobsReducer;

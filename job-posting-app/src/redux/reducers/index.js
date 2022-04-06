import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //actions go here

    default:
      return state;
  }
};

export default mainReducer;

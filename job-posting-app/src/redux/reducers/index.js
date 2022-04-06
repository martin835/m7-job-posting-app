import { initialState } from "../store";
import { ADD_TO_FAVORITES } from "../actions";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //actions go here
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};

export default mainReducer;

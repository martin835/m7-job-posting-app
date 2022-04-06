import { initialState } from "../store";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";
import JobPost from "../../components/JobPost";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //actions go here
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((JobPost, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;

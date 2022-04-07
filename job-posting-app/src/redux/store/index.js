import { createStore, combineReducers } from "redux";
import allJobsReducer from "../reducers/allJobs";
import favoritesJobsReducer from "../reducers/favoriteJobs";

export const initialState = {
  favoriteJobs: { favorites: [] },
  allJobs: { jobs: [] },
};

const bigReducer = combineReducers({
  favoriteJobs: favoritesJobsReducer,
  allJobs: allJobsReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;

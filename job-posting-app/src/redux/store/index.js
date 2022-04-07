import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fetchedJobsReducer from "../reducers/fetchedJobs";
import favoritesJobsReducer from "../reducers/favoriteJobs";
import thunk from "redux-thunk";

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favoriteJobs: { favorites: [] },
  fetchedJobs: { searchedJobs: [], isError: false, isLoading: false },
};

const bigReducer = combineReducers({
  favoriteJobs: favoritesJobsReducer,
  fetchedJobs: fetchedJobsReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;

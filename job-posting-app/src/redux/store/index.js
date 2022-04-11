import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fetchedJobsReducer from "../reducers/fetchedJobs";
import favoritesJobsReducer from "../reducers/favoriteJobs";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const configureStore = createStore(
  persistedReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

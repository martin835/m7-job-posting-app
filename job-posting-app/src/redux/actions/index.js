export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (jobPost) => ({
  type: ADD_TO_FAVORITES,
  payload: jobPost,
});

export const removeFromFavorites = (i) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: i,
});

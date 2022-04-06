export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavorites = (jobPost) => ({
  type: ADD_TO_FAVORITES,
  payload: jobPost,
});

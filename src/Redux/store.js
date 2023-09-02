import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer  } from "./FavoriteSlice";

export let store = configureStore({
    reducer:{
        favoriteItems:favoritesReducer,
        detailsItem: favoritesReducer
    }
})
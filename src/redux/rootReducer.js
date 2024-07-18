import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./resturantSlice";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
});

export default rootReducer;

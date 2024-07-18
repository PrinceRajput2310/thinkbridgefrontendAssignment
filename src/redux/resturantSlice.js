import { createSlice } from "@reduxjs/toolkit";
import RestaurantData from "../jsonData/resturantData";

const initialState = {
  data: RestaurantData,
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchRestaurantsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRestaurantsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchRestaurantsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addRestaurant: (state, action) => {
      state.data.push(action.payload);
    },
    deleteRestaurant: (state, action) => {
      state.data = state.data.filter((r) => r.id !== action.payload);
    },
    modifyRestaurant: (state, action) => {
      const index = state.data.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
  },
});

export const {
  fetchRestaurantsStart,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
  addRestaurant,
  deleteRestaurant,
  modifyRestaurant,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;

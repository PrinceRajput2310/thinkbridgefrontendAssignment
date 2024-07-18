import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchRestaurantsStart,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
} from "./resturantSlice";

function* fetchRestaurants() {
  try {
    const response = yield call(axios.get, "URL_TO_FETCH_RESTAURANTS");
    yield put(fetchRestaurantsSuccess(response.data));
  } catch (error) {
    yield put(fetchRestaurantsFailure(error.message));
  }
}

function* restaurantSaga() {
  yield takeEvery(fetchRestaurantsStart.type, fetchRestaurants);
}

export default restaurantSaga;

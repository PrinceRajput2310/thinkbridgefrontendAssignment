// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "./rootReducer";
// import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import restaurantReducer from "./resturantSlice";

// const store = configureStore({
//   reducer: {
//     restaurants: restaurantReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./resturantSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

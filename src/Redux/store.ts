import { configureStore } from "@reduxjs/toolkit";
import myCourseReducer from "./Slicers/myCoursesSlice";
import teacherReducer from "./Slicers/teacherSlice";

const store = configureStore({
  reducer: {
    user: teacherReducer,
    courses: myCourseReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

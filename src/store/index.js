import { configureStore } from "@reduxjs/toolkit";
import billingCycleReducer from "../features/billingCycle/billingCycleSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import tabReducer from "../common/tab/tabSlice";

const store = configureStore({
  reducer: {
    billingCycle: billingCycleReducer,
    dashboard: dashboardReducer,
    tab: tabReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

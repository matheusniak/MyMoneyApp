import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "tabList",
  visible: {},
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    selectTab(state, action) {
      state.selected = action.payload;
    },
    showTabs(state, action) {
      state.visible = { ...action.payload };
    },
  },
});

export const { selectTab, showTabs } = tabSlice.actions;
export default tabSlice.reducer;

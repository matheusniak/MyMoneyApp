import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../mocks/axiosMock";
import { toast } from "react-toastify";

const initialValues = {
  credits: [{ name: "", value: 0 }],
  debts: [{ name: "", value: 0, status: "" }],
};

const billingSlice = createSlice({
  name: "billingCycle",
  initialState: {
    list: [],
    selected: null,
    formInitialValues: initialValues,
    status: "idle",
  },
  reducers: {
    setFormValues(state, action) {
      state.formInitialValues = action.payload;
    },
    clearForm(state) {
      state.formInitialValues = initialValues;
    },
  },
  extraReducers: (builder) => {
    // extraReducers will be added in next commits
  },
});

export const { setFormValues, clearForm } = billingSlice.actions;
export default billingSlice.reducer;

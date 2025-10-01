import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../mocks/axiosMock";
import { toast } from "react-toastify";

export const fetchBillingCycles = createAsyncThunk(
  "billing/fetchList",
  async () => {
    const resp = await axios.get(`${BASE_URL}/billingCycles`);
    return resp.data;
  }
);

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
    builder.addCase(fetchBillingCycles.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchBillingCycles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBillingCycles.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setFormValues, clearForm } = billingSlice.actions;
export default billingSlice.reducer;

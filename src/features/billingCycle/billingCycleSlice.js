import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../mocks/axiosMock";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3003/api";

export const fetchBillingCycles = createAsyncThunk(
  "billing/fetchList",
  async () => {
    const resp = await axios.get(`${BASE_URL}/billingCycles`);
    return resp.data;
  }
);

export const createBillingCycle = createAsyncThunk(
  "billing/create",
  async (values, { dispatch }) => {
    const resp = await axios.post(`${BASE_URL}/billingCycles`, values);
    toast.success("Operação realizada com sucesso.");
    dispatch(fetchBillingCycles());
    return resp.data;
  }
);

export const updateBillingCycle = createAsyncThunk(
  "billing/update",
  async (values, { dispatch }) => {
    const id = values._id || "";
    const resp = await axios.put(`${BASE_URL}/billingCycles/${id}`, values);
    toast.success("Operação realizada com sucesso.");
    dispatch(fetchBillingCycles());
    return resp.data;
  }
);

export const removeBillingCycle = createAsyncThunk(
  "billing/remove",
  async (values, { dispatch }) => {
    const id = values._id || "";
    const resp = await axios.delete(`${BASE_URL}/billingCycles/${id}`);
    toast.success("Operação realizada com sucesso.");
    dispatch(fetchBillingCycles());
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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../mocks/axiosMock";

const BASE_URL = "http://localhost:3003/api";

export const fetchSummary = createAsyncThunk(
  "dashboard/fetchSummary",
  async () => {
    const resp = await axios.get(`${BASE_URL}/billingCycles/summary`);
    return resp.data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { summary: { credit: 0, debt: 0 }, status: "idle" },
  extraReducers: (builder) => {
    builder.addCase(fetchSummary.fulfilled, (state, action) => {
      state.summary = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchSummary.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSummary.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default dashboardSlice.reducer;

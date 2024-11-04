import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeatherRequest, getCurrentWeatherResponse } from "../../../types";
import { getCurrentWeather } from "../../api/getCurrentWeather";

export const fecthDataWeather = createAsyncThunk(
  "weather/fetchDataWeather",
  async ({q, days, lang}: getCurrentWeatherRequest, _) => {
    return getCurrentWeather({q, days, lang}).then(response => response.data);
  }
);

export interface WeatherState {
  data: getCurrentWeatherResponse | null;
  loading: boolean;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthDataWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fecthDataWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
  },
});

export const {  } = weatherSlice.actions;

export default weatherSlice.reducer;

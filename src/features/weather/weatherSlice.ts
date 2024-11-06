import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCurrentWeatherRequest,
  getCurrentWeatherResponse,
} from "../../../types";

import { getCurrentWeather } from "../../api/getCurrentWeather";
import { AxiosError } from "axios";

export const fecthDataWeather = createAsyncThunk<
  getCurrentWeatherResponse,
  getCurrentWeatherRequest,
  { rejectValue: { status: AxiosError["status"] } }
>("weather/fetchDataWeather", async ({ q, days, lang }, thunkAPI) => {
  return getCurrentWeather({ q, days, lang })
    .then((res) => res.data)
    .catch((err) => {
      const error = err as AxiosError;
      return thunkAPI.rejectWithValue({ status: error.status });
    });
});

export interface WeatherState {
  data: getCurrentWeatherResponse | null | undefined;
  loading: boolean;
  error: null | string | undefined;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
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
    });
    builder.addCase(fecthDataWeather.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      if (action.payload?.status === 400) {
        state.error = "Геопозиция не найдена";
      } else {
        state.error = "Непредвиденная ошибка";
      }
    });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;

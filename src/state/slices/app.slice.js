import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import weatherService from "../../services/WeatherService";

const initialState = {
  settings: {
    theme: "dark",
  },
  weather: {
    data: null,
    error: null,
    loading: false,
  },
};
export const getWeatherData = createAsyncThunk(
  "app/getWeatherData",
  async (values, { rejectWithValue }) => {
    try {
      const data = await weatherService.getByDtata(values.lat, values.lon);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleTheme: (state) => {
      state.settings.theme === "dark"
        ? (state.settings.theme = "light")
        : (state.settings.theme = "dark");
    },
    appinit: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.weather.loading = true;
        state.weather.error = null;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.weather.loading = false;
        state.weather.error = null;
        state.weather.data = action.payload;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.weather.loading = false;
        state.weather.error = action.payload;
      });
  },
});

export const { appinit, handleTheme } = appSlice.actions;

export default appSlice;

import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

const initialState = {
  user: null,
  login: {
    loading: false,
    error: null,
  },
  signup: {
    loading: false,
    error: null,
  },
  profil: {
    loading: false,
    photo: null,
    name: null,
    error: null,
  },
};

export const appLogin = createAsyncThunk(
  "auth/appLogin",
  async (values, { rejectWithValue }) => {
    try {
      const user = await AuthService.login(values.email, values.password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const appSingup = createAsyncThunk(
  "auth/appSingup",
  async (values, { rejectWithValue }) => {
    try {
      const user = await AuthService.register(values.email, values.password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const appLogout = createAsyncThunk(
  "auth/appLogout",
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const appUpdateProfil = createAsyncThunk(
  "auth/updateProfil",
  async (values, { rejectWithValue }) => {
    try {
      const user = await AuthService.updateProfil(values.name, values.photo);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInit: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(appLogin.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
      })
      .addCase(appLogin.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.error = null;
        state.user = action.payload;
      })
      .addCase(appLogin.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
      });
    builder.addCase(appLogout.fulfilled, (state) => {
      state.user = null;
    });
    builder
      .addCase(appSingup.pending, (state) => {
        state.signup.loading = true;
        state.signup.error = null;
      })
      .addCase(appSingup.fulfilled, (state, action) => {
        state.signup.loading = false;
        state.signup.error = null;
        state.user = action.payload;
      })
      .addCase(appSingup.rejected, (state, action) => {
        state.signup.loading = false;
        state.signup.error = action.payload;
      });
    builder
      .addCase(appUpdateProfil.pending, (state) => {
        state.profil.loading = true;
        state.profil.error = null;
      })
      .addCase(appUpdateProfil.fulfilled, (state, action) => {
        state.profil.loading = false;
        state.profil.error = null;
        state.profil.photo = action.payload;
        state.profil.name = action.payload;
      })
      .addCase(appUpdateProfil.rejected, (state, action) => {
        state.profil.loading = false;
        state.profil.error = action.payload;
      });
  },
});

export const { authInit } = authSlice.actions;

export default authSlice;

import * as API from 'api/userApi';
import { AxiosError } from 'axios';
import { createAppAsyncThunk, TError } from 'store/types';

// auth
export const registerThunk = createAppAsyncThunk(
  'auth/register',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.register(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const loginThunk = createAppAsyncThunk(
  'auth/login',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.login(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const logoutThunk = createAppAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await API.logout();
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const verifyEmailThunk = createAppAsyncThunk(
  'auth/verify',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.verifyEmail(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const forgotPassThunk = createAppAsyncThunk(
  'auth/forgot',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.forgotPass(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const resetPassThunk = createAppAsyncThunk(
  'auth/reset',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.resetPass(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

// users
export const getUserThunk = createAppAsyncThunk(
  'users/get',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.user.accessToken;
    try {
      return await API.getUser(persistedToken ?? '');
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const updateUserThunk = createAppAsyncThunk(
  'users/update',
  async (credentials: API.TCredentials, thunkAPI) => {
    try {
      return await API.updateUser(credentials);
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const deleteUserThunk = createAppAsyncThunk(
  'users/delete',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.accessToken;
    try {
      if (token) {
        return await API.deleteUser();
      }
    } catch (error) {
      const err = error as AxiosError<TError>;
      if (!err.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

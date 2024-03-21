import * as TNK from 'store/auth/authThunks';

import {
  combineReducers,
  createSlice,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit';

import { TUser, userInitialState } from './initialState';

const thunkArr = [
  TNK.registerThunk,
  TNK.loginThunk,
  TNK.verifyEmailThunk,
  TNK.logoutThunk,

  TNK.forgotPassThunk,
  TNK.resetPassThunk,

  TNK.getUserThunk,
  TNK.updateUserThunk,
  TNK.deleteUserThunk,
];

const fn = (type: 'pending' | 'fulfilled' | 'rejected') =>
  thunkArr.map(el => {
    if (type === 'pending') return el.pending;
    if (type === 'fulfilled') return el.fulfilled;
    else return el.rejected;
  });

// fulfilled slice
const handleAuthSucsess = (state: TUser, action: PayloadAction<TUser>) => {
  return { ...state, ...action.payload };
};

const handleLoginSucsess = (
  state: TUser,
  action: PayloadAction<{ result: { user: TUser } }>,
) => {
  return { ...state, ...action.payload.result.user };
};

const handleLogoutSucsess = () => userInitialState;

// auth
const authUserSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    authenticate: handleAuthSucsess,
  },
  extraReducers: builder => {
    builder
      // sign
      .addCase(TNK.registerThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.loginThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.verifyEmailThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.logoutThunk.fulfilled, handleLogoutSucsess)
      // password
      .addCase(TNK.forgotPassThunk.fulfilled, handleLogoutSucsess)
      .addCase(TNK.resetPassThunk.fulfilled, handleLogoutSucsess)
      // user profile
      .addCase(TNK.getUserThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.updateUserThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.deleteUserThunk.fulfilled, handleLogoutSucsess);
  },
});

// loading slice
const authLoadingSlice = createSlice({
  name: 'Loading',
  initialState: false,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// error slice
const authErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const authReducer = combineReducers({
  user: authUserSlice.reducer,
  loading: authLoadingSlice.reducer,
  error: authErrorSlice.reducer,
});

export const { authenticate } = authUserSlice.actions;

import { userAndToken } from '@/Types/userAndToken';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserAndTokenInt {
  userAndToken: userAndToken | null;
}

const initialState: UserAndTokenInt = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: ' auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userAndToken>) => {
      state.userAndToken = action.payload;
    },

    logout: (state) => {
      state.userAndToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

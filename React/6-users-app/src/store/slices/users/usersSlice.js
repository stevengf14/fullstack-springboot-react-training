import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    ADD_USER: (state, action) => {
      state.users = [
        ...state.users,
        {
          ...action.payload,
        },
      ];
    },
    UPDATE_USER: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...action.payload };
        }
        return user;
      });
    },
    REMOVE_USER: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    LOAD_USERS: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { ADD_USER, UPDATE_USER, REMOVE_USER, LOAD_USERS } =
  usersSlice.actions;

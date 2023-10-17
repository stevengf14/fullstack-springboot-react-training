import { createSlice } from "@reduxjs/toolkit";

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
  admin: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userSelected: initialUserForm,
    visibleForm: false,
    errors: initialErrors,
    isLoading: true,
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [
        ...state.users,
        {
          ...payload,
        },
      ];
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    updateUser: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return { ...payload };
        }
        return user;
      });
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    removeUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    loadUsers: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    },
    onUserSelectedForm: (state, { payload }) => {
      state.userSelected = payload;
      state.visibleForm = true;
    },
    onOpenForm: (state) => {
      state.visibleForm = true;
    },
    onCloseForm: (state) => {
      state.visibleForm = false;
      state.userSelected = initialUserForm;
    },
    loadError: (state, payload) => {
      state.errors = payload;
    },
  },
});

export const {
  addUser,
  updateUser,
  removeUser,
  loadUsers,
  onUserSelectedForm,
  onOpenForm,
  onCloseForm,
  loadError,
} = usersSlice.actions;

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
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [
        ...state.users,
        {
          ...action.payload,
        },
      ];
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...action.payload };
        }
        return user;
      });
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    onUserSelectedForm: (state, action) => {
      state.userSelected = action.payload;
      state.visibleForm = true;
    },
    onOpenForm: (state) => {
      state.visibleForm = true;
    },
    onCloseForm: (state) => {
      state.visibleForm = false;
      state.userSelected = initialUserForm;
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
} = usersSlice.actions;

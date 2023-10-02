export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuth: true,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        isAuth: false,
        isAdmin: false,
        user: undefined,
      };
    default:
      return state;
  }
};

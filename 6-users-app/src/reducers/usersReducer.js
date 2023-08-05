export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "UPDATE_USER":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "REMOVE_USER":
      return [...state.filter((user) => user.id !== action.payload)];

    default:
      return;
  }
};

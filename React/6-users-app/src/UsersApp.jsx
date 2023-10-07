import { AppRoutes } from "./AppRoutes";
import { Provider } from "react-redux";

export const UsersApp = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
};

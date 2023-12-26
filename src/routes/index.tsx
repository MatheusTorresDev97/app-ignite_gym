import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./AuthRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

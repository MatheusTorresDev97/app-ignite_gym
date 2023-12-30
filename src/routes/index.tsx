import { useContext } from "react";
import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";
import { AuthContext } from "@contexts/AuthContext";


export const Routes = () => {
  const { colors } = useTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  const contextData = useContext(AuthContext)

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};

import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";

import { useAuth } from "@hooks/useAuth";

export const Routes = () => {
  const { colors } = useTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  const { user } = useAuth();

  console.log("USUÁRIO LOGADO =>", user);

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
};

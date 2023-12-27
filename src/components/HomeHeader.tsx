import { HStack, Heading, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
        <UserPhoto 
        source={{uri: "https://github.com/matheustorresdev97.png"}}
        size={16}
        alt="Imagem do usuário"
        mr={4}
        />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">Matheus</Heading>
      </VStack>
    </HStack>
  );
};

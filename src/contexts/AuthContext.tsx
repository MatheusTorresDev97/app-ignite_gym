import { createContext, ReactNode } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
  }

  type AuthContextProviderProps = {
    children: ReactNode
  }

  export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

  export const AuthContextProvider = ({children} : AuthContextProviderProps) => {
    return (
      <AuthContext.Provider value={{
        user: {
          id: '1',
          name: 'Matheus Torres',
          email: 'matheus@email.com',
          avatar: 'matheus.png'
        }
      }}>
        {children}
      </AuthContext.Provider>
    )
  }
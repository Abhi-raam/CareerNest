// // import axios from "../Axios";
// import React, { useState, createContext, useContext } from "react";

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export function AuthProvider(props) {
//     const [authUser, setAuthUser] = useState(null)

//     const value = { authUser, setAuthUser}

    

//     return (
//         <AuthContext.Provider value={value}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// } 


import React, { useState, createContext, useContext, ReactNode } from "react";

interface AuthContextType {
  authUser: string; // Change 'any' to your authUser type
  setAuthUser: React.Dispatch<React.SetStateAction<any>>; // Change 'any' to your authUser type
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<string>(""); // Change 'any' to your authUser type

  const value: AuthContextType = { authUser, setAuthUser };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

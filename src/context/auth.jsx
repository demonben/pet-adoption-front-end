import { createContext, useState, useEffect, useContext } from "react";
import localforage from "localforage";

export const AuthContext = createContext({
  token: "",
  saveToken: async (token) => {},
  removeToken: async () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [token, setToken] = useState();

  const tokenKey = "userToken";

  const saveToken = async (token) => {
    setToken(token);
    await localforage.setItem(tokenKey, token);
  };
  const removeToken = async (token) => {
    setToken();
    await localforage.removeItem(tokenKey);
  };
  useEffect(() => {
    localforage.getItem(tokenKey).then(token=>{
        if (token) {
          setToken(token);
        }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

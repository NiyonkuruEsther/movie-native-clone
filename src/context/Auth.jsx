import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

export const Auth = createContext();

const auth = FIREBASE_AUTH;

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState();

  useEffect(() => {
    const unsubscribe = () => {
      setUser(auth.currentUser);
      setIsLoading(false);
    };

    return unsubscribe;
  }, []);

  const generateToken = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        console.log(auth);
        return token;
      } else {
        console.log("No user is currently signed in.");
      }
    } catch (error) {
      console.error("Error generating token:", error);
    }
  };

  const storeUser = async (user) => {
    try {
      const response = await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          token: generateToken()
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data, reset) => {
    try {
      console.log("trying to login");
      await signInWithEmailAndPassword(getAuth(), data.email, data.password);
      setIsLoggedIn(true);
      reset({
        email: "",
        password: ""
      });
      const user = FIREBASE_AUTH.currentUser;
      storeUser(user);
      navigation.navigate("BottomNavigation");

      console.log("logged in successfully", isLoggedIn);
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error.code, isLoggedIn, isLoggedIn !== null || loginError);
      if (error.code === "auth/too-many-requests") {
        setLoginError(
          "Too many request, Please reset Password or Try again later"
        );
        console.log(error.code, isLoggedIn, isLoggedIn !== null || loginError);
      } else if (error.code === "auth/invalid-credential") {
        setLoginError("Invalid credentials");
        console.log(error.code, isLoggedIn, isLoggedIn !== null || loginError);
      } else {
        console.log(isLoggedIn !== null || loginError);
      }
    }
    {
      (isLoggedIn !== null || loginError) &&
        showMessage({
          message: !isLoggedIn ? loginError : "Logged in successfully",
          type: !isLoggedIn ? "danger" : "success"
        });
    }
  };

  const signup = async (data, reset) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      reset({
        email: "",
        password: "",
        confirm_password: ""
      });
    } catch (error) {
      setSignupError(error.code);
      showMessage({
        message: error.code,
        type: "danger"
      });
      console.log(error.code);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Auth.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        loginError,
        isLoggedIn
      }}
    >
      {children}
    </Auth.Provider>
  );
};

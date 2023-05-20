import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../BASE_URL";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [authToken, setAuthToken] = useState(null); //if the  user get logOut then authToken should be null
    const [userHaveToSignUpToGetToken, setUserHaveToSignUpToGetToken] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          // console.log("User", currentUser);  
          setIsLoading(false)    
        });
        return () => {
          unsubscribe();
        };
    }, []);

    useEffect(()=>{
      fetchAuthTokenFromLS()
    },[])

    const mavigate = useNavigate()

    const fetchAuthTokenByCreatingUserAccount = (email, uid, displayName) => {
      console.log("Create user In backend", email, uid, displayName)
      axios
        .post(`${BASE_URL}/auth/account/create/`, {
          email: email,
          username: email,
          password: uid,
          full_name: displayName,
        })
        .then(function (response) {
          if(response.status===200){
            window.localStorage.setItem("authToken", response.data.token)
            return setAuthToken(response.data.token)
          }
        })
        .catch(function (error) {
          // alert("Server error while signup");
          return logOut()
        });
    };

    const fetchAuthTokenByLoginTheUser = (email, uid ) => {
      console.log("Runing backend login")
      axios
        .post(`${BASE_URL}/auth/token/`, {
          username: email,
          password: uid
        })
        .then(function (response) {
          if(response.status===200){
            window.localStorage.setItem("authToken", response.data.token)
              return setAuthToken(response.data.token)
          }
          return setUserHaveToSignUpToGetToken(true)
        })
        .catch(function (error) {
          return setUserHaveToSignUpToGetToken(true)
        });
    };
  
    if(user&& !authToken && !userHaveToSignUpToGetToken){
      fetchAuthTokenByLoginTheUser(user.email, user.uid)
    }
  
    if(userHaveToSignUpToGetToken && user){
      fetchAuthTokenByCreatingUserAccount(user.email, user.uid, user.displayName)
    }

    const fetchAuthTokenFromLS = () => {
      const adminAuthTokenFromLS = window.localStorage.getItem("authToken")
      if(adminAuthTokenFromLS){
        setAuthToken(adminAuthTokenFromLS)
      }
    }
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        // signInWithRedirect(auth, provider)
    };

    
    const logOut = () => {
      setUser(null)
      window.localStorage.removeItem("authToken")
        signOut(auth)
    };

    console.log(user)

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user, authToken}}>
          {!isLoading&&children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () =>  {
    return useContext(AuthContext)
}
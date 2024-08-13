import { createContext, useEffect, useState } from "react";
import Router from "next/router";

import firebase from "../../firebase/config";
import UserModel from "@/src/model/UserModel";

import Cookies from "js-cookie";

interface AuthContextProps {
  user?: UserModel | null;
  loading?: boolean;
  toRegister?: (email: string, password: string) => Promise<void>;
  toLogin?: (email: string, password: string) => Promise<void>;
  toLoginWithGoogle?: () => Promise<void>;
  toLogout?: () => Promise<void>;
}

interface AuthProvider {
  children: any;
}

const AuthContext = createContext<AuthContextProps>({});

const toNormalizeUser = async (
  firebaseUser: firebase.User | null
): Promise<UserModel | null> => {
  const token = firebaseUser && (await firebaseUser.getIdToken());
  return (
    firebaseUser && {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName,
      token: token,
      provider: firebaseUser.providerData[0]?.providerId,
      urlImage: firebaseUser.photoURL,
    }
  );
};

const toManageCookies = (loggedIn: boolean) => {
  const daysCookiesOn = 7;
  if (loggedIn) {
    Cookies.set("admin-template-lukaz-auth", loggedIn.toString(), {
      expires: daysCookiesOn,
    });
  } else {
    Cookies.remove("admin-template-lukaz-auth");
  }
};

export const AuthProvider = (props: AuthProvider) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserModel | null>();

  const toConfigSession = async (firebaseUser: firebase.User | null) => {
    if (firebaseUser?.email) {
      const user = await toNormalizeUser(firebaseUser);
      setUser(user);
      toManageCookies(true);
      setLoading(false);
      return user?.email;
    } else {
      setUser(null);
      toManageCookies(false);
      setLoading(false);
      return false;
    }
  };

  const toRegister = async (email: string, password: string) => {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await toConfigSession(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const toLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await toConfigSession(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const toLoginWithGoogle = async () => {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await toConfigSession(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const toLogout = async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await toConfigSession(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Cookies.get("admin-template-lukaz-auth")) {
      const toCancel = firebase
        .auth()
        .onIdTokenChanged(async (firebaseUser) => {
          await toConfigSession(firebaseUser);
        });
      return () => toCancel();
    } else setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        toRegister,
        toLogin,
        toLoginWithGoogle,
        toLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

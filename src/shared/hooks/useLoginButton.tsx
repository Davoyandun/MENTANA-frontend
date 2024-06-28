/* eslint-disable no-console */
"use client";
import React, { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/shared/context";
import { useToast } from "../components/ui/use-toast";

type LoginButtonProps = {
  redirectTo?: string;
};

export default function useLoginButton({ redirectTo = "/" }: LoginButtonProps) {
  const router = useRouter();
  const { userState, setUserState } = useAppContext();
  const [tokenState, setTokenState] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem("token");
    if (tokenInLocalStorage || userState.token) {
      router.push(redirectTo);
    }
  }, [tokenState, userState.token]);

  const loginWithGoogleHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        result.user.getIdToken().then((token) => {
          localStorage.setItem("token", token);
          setTokenState(token);
          setUserState({
            provider: result.providerId,
            userName: result.user.displayName,
            email: result.user.email,
            photoUrl: result.user.photoURL,
            token: token,
          });
        });
        toast({
          title: "Inicio de sesión exitoso",
          description: "Ha iniciado sesión exitosamente.",
          duration: 2000,
          classNameTitle: 'text-xl text-slateGray800 font-bold',
          classNameDescription: 'text-base text-slateGrayBase font-semibold'

        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return {
    tokenState,
    loginWithGoogleLabel: "Continuar con Google",
    loginWithGoogleHandler,
  };
}

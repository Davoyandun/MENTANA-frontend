"use client";

import { useEffect, useState } from "react";
import { Button } from "../../../shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shared/components/ui/dialog";
import useLoginButton from "@/shared/hooks/useLoginButton";
import { useRouter } from "next/navigation";
import { useToast } from "@/shared/components/ui/use-toast";
import GoogleLoginButton from "@/app/login/loginButtonGoogle";


export function DialogLogin() {
  const { loginWithGoogleHandler, tokenState } = useLoginButton({redirectTo: "/agendar"});  
  const router = useRouter();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  useEffect(() => {
    if (tokenState) {
      setIsOpenDialog(false);
      router.push("/agendar");
    }
  }, [tokenState, router]);

  const handleLogin = () => {
    loginWithGoogleHandler();
    setIsOpenDialog(true);
  };

  return (
    <>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
          <Button className="bg-teaRose500 hover:bg-teaRose700 mt-2 w-36" variant="outline">
            <p className="text-base font-bold text-white">Iniciar Sesión</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-xl text-slateGray800 font-bold">
                Iniciar Sesión
              </p>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {!tokenState && 
              <button onClick={handleLogin}> 
                <GoogleLoginButton/> 
              </button>
            } 
            {tokenState && <p className="text-center self-center text-slateGray800 font-bold">Usted ya cuenta con inicio de sesión.</p>}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

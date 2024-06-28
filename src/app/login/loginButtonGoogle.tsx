import React from 'react';
import Image from 'next/image';
import GoogleIcon from '../../../public/Icons/Login/googleIcon';
import useLoginButton from '@/shared/hooks/useLoginButton';

const GoogleLoginButton = () => {
    const { loginWithGoogleLabel} = useLoginButton({redirectTo: "/agendar"});  

  return (
    <div className="flex flex-row shadow-lg gap-3 py-3 px-5 rounded-xl">
      <Image src={GoogleIcon()} alt="GoogleIcon" width={40} height={40} />
      <p className="text-center self-center text-slateGray800 font-bold">{loginWithGoogleLabel}</p>
    </div>
  );
};

export default GoogleLoginButton;

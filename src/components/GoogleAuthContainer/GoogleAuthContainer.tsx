import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogle } from '../../services/auth';

interface GoogleAuthContainerProps {
  onSuccess: () => void;
  onError: () => void;
  rememberMe?: boolean;
}
const GoogleAuthContainer: React.FC<GoogleAuthContainerProps> = ({
  onSuccess,
  onError,
  rememberMe = false,
}) => {
  return (
    <GoogleLogin
      onSuccess={async response => {
        if (!response.credential) {
          onError();
          return;
        }
        try {
          await loginWithGoogle(response.credential, rememberMe);
          onSuccess();
        } catch {
          onError();
        }
      }}
      onError={onError}
      theme="outline"
      size="large"
      shape="rectangular"
      text="signin_with"
      logo_alignment="center"
      width={400}
    />
  );
};

export default GoogleAuthContainer;

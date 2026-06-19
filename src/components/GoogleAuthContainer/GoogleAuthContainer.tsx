import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogle } from '../../services/auth';

interface GoogleAuthContainerProps {
  onSuccess: () => void;
  onError: () => void;
}
const GoogleAuthContainer: React.FC<GoogleAuthContainerProps> = ({
  onSuccess,
  onError,
}) => {
  return (
    <GoogleLogin
      onSuccess={async response => {
        if (!response.credential) {
          onError();
          return;
        }
        try {
          await loginWithGoogle(response.credential);
          onSuccess();
        } catch {
          onError();
        }
      }}
      onError={onError}
    />
  );
};

export default GoogleAuthContainer;

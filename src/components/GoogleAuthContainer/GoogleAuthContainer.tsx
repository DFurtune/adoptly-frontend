import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      locale={i18n.language}
    >
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
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthContainer;

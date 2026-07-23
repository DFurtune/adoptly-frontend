import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './PasswordResetForm.css';

type ResetFormData = {
  email: string;
};

type PasswordResetFormProps = {
  onBackToLogin: () => void;
  onSubmitEmail: (_email: string) => Promise<void>;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  onBackToLogin,
  onSubmitEmail,
}) => {
  const { t } = useTranslation();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormData>();

  const emailValue = watch('email');

  const onSubmit = async (data: ResetFormData) => {
    setServerError(null);
    try {
      await onSubmitEmail(data.email);
      setIsSent(true);
    } catch (error) {
    
      setServerError(t('login.serverError'));
      console.error('Reset password error:', error);
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        {!isSent ? (
          <form className="password-reset-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="password-reset-title">{t('reset.title', 'Відновлення паролю')}</h2>
            
            <p className="password-reset-description">
              {t('reset.description', 'Введіть email, який Ви використовували при реєстрації, для отримання посилання на скидання паролю.')}
            </p>

            <div className="password-reset-field">
              <label className="password-reset-label" htmlFor="reset-email">
                Email
              </label>
              <input
                id="reset-email"
                type="email"
                disabled={isSubmitting}
                className={`password-reset-input ${errors.email || serverError ? 'input-error' : ''}`}
                placeholder={t('login.email_placeholder')} 
                {...register('email', {
                  required: t('login.email_required'), 
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t('login.email_invalid'), 
                  },
                })}
              />
              {errors.email && (
                <span className="password-reset-error">{errors.email.message}</span>
              )}
              {serverError && !errors.email && (
                <span className="password-reset-error" role="alert">
                  {serverError}
                </span>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              maxWidth="100%"
              height={56}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('reset.submitting', 'Надсилання...') : t('reset.submit', 'Скинути пароль')}
            </Button>

            <button
              type="button"
              className="password-reset-back-btn"
              onClick={onBackToLogin}
            >
              {t('reset.back_to_login', 'Повернутись до входу')}
            </button>
          </form>
        ) : (
          
          <div className="password-reset-form" style={{ textAlign: 'center' }}>
            <h2 className="password-reset-title">{t('reset.success_title', 'Перевірте пошту')}</h2>
            <p className="password-reset-description">
              {t('reset.success_description', 'Ми надіслали інструкції для відновлення паролю на адресу')}{' '}
              <strong>{emailValue}</strong>.
            </p>
            <button
              type="button"
              className="password-reset-back-btn"
              onClick={() => setIsSent(false)}
            >
              {t('reset.try_again', 'Спробувати іншу адресу')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordResetForm;
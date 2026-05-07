import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import './EmailConfirmModal.css';

interface EmailConfirmModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
}

const EmailConfirmModal: React.FC<EmailConfirmModalProps> = ({
  isOpen,
  email,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={t('registration.confirmEmail.title')}
    >
      <div className="email-confirm">
        <h2 className="email-confirm-title">
          {t('registration.confirmEmail.title')}
        </h2>
        <p className="email-confirm-message">
          {t('registration.confirmEmail.message', { email })}
        </p>
      </div>
    </Modal>
  );
};

export default EmailConfirmModal;

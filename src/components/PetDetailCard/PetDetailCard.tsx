import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pet } from '../../types/pet';
import GenderIcon from '../GenderIcon/GenderIcon';
import PetGallery from '../PetGallery/PetGallery';
import Button from '../Button/Button';
import { formatAge } from '../../utils/formatAge';
import './PetDetailCard.css';

type PetDetailCardProps = {
  pet: Pet;
};

const PetDetailCard: React.FC<PetDetailCardProps> = ({ pet }) => {
  const { t } = useTranslation();

  return (
    <div className="pet-detail-card">
      <div className="pet-detail-card__gallery">
        <PetGallery images={pet.photos} altText={pet.name} />
      </div>
      <div className="pet-detail-card__info">
        <h1 className="pet-detail-card__name">{pet.name}</h1>
        <div className="pet-detail-card__age-gender">
          <p>{formatAge(pet.age, t)}</p>
          <GenderIcon gender={pet.gender} />
        </div>
        <p className="pet-detail-card__location">
          <span className="pet-detail-card__label">
            {t('petDetail.location')}:{' '}
          </span>
          {pet.shelter.location}
        </p>
        <p className="pet-detail-card__shelter">
          <span className="pet-detail-card__label">
            {t('petDetail.shelter')}:{' '}
          </span>
          {pet.shelter.name}
        </p>
        <div className="pet-detail-card__health">
          <p>
            <span className="pet-detail-card__label">
              {t('petDetail.vaccinated')}:{' '}
            </span>
            {pet.vaccinated ? t('common.yes') : t('common.no')}
          </p>
          <p>
            <span className="pet-detail-card__label">
              {t('petDetail.spayedNeutered')}:{' '}
            </span>
            {pet.spayedNeutered ? t('common.yes') : t('common.no')}
          </p>
          <p>
            <span className="pet-detail-card__label">
              {t('petDetail.treatedForParasites')}:{' '}
            </span>
            {pet.treatedForParasites ? t('common.yes') : t('common.no')}
          </p>
        </div>
        <div className="pet-detail-card__description">
          <p className="pet-detail-card__label">
            {t('petDetail.description')}:
          </p>
          <p>{pet.description}</p>
        </div>
        <div className="pet-detail-card__actions">
          {/* TODO: add navigation to adoption form */}
          <Button variant="primary" height={75}>
            {t('petDetail.adopt')}
          </Button>
          {/* TODO: add onClick handler */}
          <Button variant="secondary" height={75}>
            {t('petDetail.contactShelter')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailCard;

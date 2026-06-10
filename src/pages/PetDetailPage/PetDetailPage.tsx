import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Pet } from '../../types/pet';
import { getPetById } from '../../services/pets';
import GenderIcon from '../../components/GenderIcon/GenderIcon';
import PetGallery from '../../components/PetGallery/PetGallery';
import './PetDetailPage.css';
import { formatAge } from '../../utils/formatAge';

const PetDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getPetById(Number(id)).then(data => {
      if (active) {
        setPet(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return null;
  if (!pet) return <p>{t('petDetail.notFound')}</p>;

  return (
    <div className="pet-detail-page container">
      <div className="pet-detail-page__gallery">
        <PetGallery images={pet.photos} altText={pet.name} />
      </div>
      <div className="pet-detail-page__info">
        <h1 className="pet-detail-page__name">{pet.name}</h1>
        <div className="pet-detail-page__age-gender">
          <p>{formatAge(pet.age, t)}</p>
          <GenderIcon gender={pet.gender} />
        </div>
        <p className="pet-detail-page__location">
          <span className="pet-detail-page__label">
            {t('petDetail.location')}:{' '}
          </span>
          {pet.shelter.location}
        </p>
        <p className="pet-detail-page__shelter">
          <span className="pet-detail-page__label">
            {t('petDetail.shelter')}:{' '}
          </span>
          {pet.shelter.name}
        </p>
        <div className="pet-detail-page__health">
          <p>
            <span className="pet-detail-page__label">
              {t('petDetail.vaccinated')}:{' '}
            </span>
            {pet.vaccinated ? t('common.yes') : t('common.no')}
          </p>
          <p>
            <span className="pet-detail-page__label">
              {t('petDetail.spayedNeutered')}:{' '}
            </span>
            {pet.spayedNeutered ? t('common.yes') : t('common.no')}
          </p>
          <p>
            <span className="pet-detail-page__label">
              {t('petDetail.treatedForParasites')}:{' '}
            </span>
            {pet.treatedForParasites ? t('common.yes') : t('common.no')}
          </p>
        </div>
        <div className="pet-detail-page__description">
          <p className="pet-detail-page__label">
            {t('petDetail.description')}:
          </p>
          <p>{pet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Pet } from '../../types/pet';
import { getPetById } from '../../services/pets';
import PetDetailCard from '../../components/PetDetailCard/PetDetailCard';
import './PetDetailPage.css';

const PetDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetById(Number(id)).then(data => {
      setPet(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return null;
  if (!pet) return <p>{t('petDetail.notFound')}</p>;

  return (
    <div className="pet-detail-page container">
      <PetDetailCard pet={pet} />
    </div>
  );
};

export default PetDetailPage;

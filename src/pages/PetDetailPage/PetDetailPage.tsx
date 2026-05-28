import React from 'react';
import { useParams } from 'react-router-dom';
import PetGallery from '../../components/PetGallery/PetGallery';

const PetDetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="pet-detail-page container">
      <PetGallery
        images={[
          'https://placedog.net/640/480?id=1',
          'https://placedog.net/640/480?id=2',
          'https://placedog.net/640/480?id=3',
        ]}
        altText={`Pet ${id}`}
      />
    </div>
  );
};

export default PetDetailPage;

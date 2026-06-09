import React from 'react';
import { Gender } from 'types/pet';
import { Icon } from '../Icon/Icon';
import './GenderIcon.css';

type GenderIconProps = {
  gender: Gender;
};

const GenderIcon: React.FC<GenderIconProps> = ({ gender }) => {
  const isMale = gender === 'MALE';

  return (
    <span className={`gender-icon gender-icon--${isMale ? 'male' : 'female'}`}>
      <Icon id={isMale ? 'icon-male' : 'icon-female'} />
    </span>
  );
};

export default GenderIcon;

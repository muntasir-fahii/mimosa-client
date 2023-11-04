import { specialistType } from '@/Types/specialist';
import React from 'react';

interface SpecialistDetailsProps {
  specialist: specialistType;
}

const SpecialistDetails: React.FC<SpecialistDetailsProps> = ({
  specialist,
}) => {
  return (
    <section className='sp container'>
      <p>{specialist.name}</p>
    </section>
  );
};

export default SpecialistDetails;

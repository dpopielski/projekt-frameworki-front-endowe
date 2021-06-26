import { FC } from 'react';

interface ComponentProps {
  title: string;
  adress: string;
  country: string;
  img: string;
}

const EntitiesCard: FC<ComponentProps> = ({ img, title, adress, country }) => {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt='' />
        </div>
        <div>
          <h3>{title}</h3>
          <span>{adress}</span>
          <span>{country}</span>
        </div>
      </div>
    </div>
  );
};

export default EntitiesCard;

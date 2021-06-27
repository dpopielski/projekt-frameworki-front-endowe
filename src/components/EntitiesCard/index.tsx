import axios from 'axios';
import { FC } from 'react';

interface ComponentProps {
  title: string;
  adress: string;
  country: string;
  img: string;
}

const EntitiesCard: FC<ComponentProps> = ({ img, title, adress, country }) => {
  return (
    <div className="p-5 w-auto">
      <div className="flex gap-2">
        <div>
          <img className="h-10 w-10" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <p className="text-xs">{adress}</p>
          <p className="text-xs">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default EntitiesCard;

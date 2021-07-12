import { FC } from 'react';

interface ComponentProps {
  title: string;
  text: string;
  img: string;
}

const EntitiesCard: FC<ComponentProps> = ({ img, title, text }) => {
  return (
    <div className="w-auto p-2 bg-white rounded">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center flex-shrink-0">
          <img className="w-20 h-20" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2 truncate">
          <h3 className="max-w-full truncate whitespace-nowrap">{title}</h3>
          <p className="text-xs truncate">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EntitiesCard;

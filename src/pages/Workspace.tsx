import { useState, SVGProps } from 'react';
import {
  CogIcon,
  OfficeBuildingIcon,
  ViewGridIcon,
  CalendarIcon,
} from '@heroicons/react/solid';
import LatestUpdates from '../components/LatestUpdates';
import { useParams, Link } from 'react-router-dom';

const CorporateCard = ({
  heading,
  name,
  Icon,
}: {
  heading: string;
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) => {
  return (
    <div className="relative w-full p-4 bg-white rounded-md shadow-sm">
      <Icon className="w-10 h-10 text-blue-800" />
      <Icon className="absolute w-32 h-32 text-blue-800 transform -translate-y-1/2 right-3 top-1/2 opacity-20" />
      <h2 className="my-2 text-xl">
        <span>{heading}</span>
        <span className="font-bold">{' ' + name}</span>
      </h2>
      <p>
        Curabitur efficitur dapibus euismod. Donec nec velit eget urna molestie
        consequat et ac ipsum.
      </p>
    </div>
  );
};
export default function Workspace() {
  const [isHidden, setIsHidden] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const name = slug.split('-').join(' ');
  return (
    <div>
      <div className="w-auto h-auto bg-white rounded-md shadow-sm">
        <div>
          <div className="relative w-full overflow-hidden max-h-36">
            <img
              className="object-cover"
              src="https://source.unsplash.com/random/1920x300"
              alt=""
            />
          </div>
          <div className="flex items-stretch w-full gap-3 px-4 py-4">
            <div className="flex-shrink-0 p-2 my-auto rounded-md shadow-md h-14">
              <img
                src="/assets/icons/entities.png"
                alt=""
                className="w-10 h-10"
              />
            </div>
            <div className="flex flex-col gap-3 ml-2">
              <h4 className="text-xl font-bold">
                {name[0].toUpperCase() + name.slice(1)}
              </h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="ml-auto">
              <CogIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-content w-full p-4 my-10 -ml-4 bg-gray-200 border border-gray-300 rounded-md">
        <div className="flex font-bold text-gray-500">
          <h2>Start working on corporate matters</h2>
          <button
            className="ml-auto focus:outline-none"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? 'Show' : 'Hide'}
          </button>
        </div>
        {!isHidden && (
          <div className="flex flex-col justify-between gap-4 mt-3 sm:flex-row">
            <Link to="/entities" className="w-full">
              <CorporateCard
                heading="Explore your"
                name="entities"
                Icon={OfficeBuildingIcon}
              />
            </Link>
            <CorporateCard
              heading="Structure your"
              name="ownership"
              Icon={ViewGridIcon}
            />
            <CorporateCard
              heading="Define the"
              name="calendar"
              Icon={CalendarIcon}
            />
          </div>
        )}
      </div>

      <LatestUpdates />
    </div>
  );
}

import { FC } from 'react';
import PersonalCard from '../PersonalCard';
import LeftMenu from '../LeftMenu';

interface ComponentProps {}

export const UserSideBar: FC<ComponentProps> = () => {
  return (
    <>
      <PersonalCard />
      <LeftMenu />
    </>
  );
};
export default UserSideBar;

import { FC } from 'react';
import PersonalCard from '../PersonalCard';
import LeftMenu from '../LeftMenu';

export const UserSideBar: FC = () => {
  return (
    <>
      <PersonalCard />
      <LeftMenu />
    </>
  );
};
export default UserSideBar;

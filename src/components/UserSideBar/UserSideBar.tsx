import { FC } from "react";
import PersonalCard from "../PersonalCard/PersonalCard"
import LeftMenu from "../LeftMenu/LeftMenu";

export const UserSideBar: FC= () => {
    return (
        <>
            <PersonalCard />
            <LeftMenu />
        </>
    );
}
export default UserSideBar;
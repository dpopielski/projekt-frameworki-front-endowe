import AmountOfFees from "components/AmountOfFees/AmountOfFees"
import InternalReviews from "components/InternalReviews/InternalReviews"
import PanelInfo from "components/PanelInfo/PanelInfo"
import ProfileInfo from "../components/ProfileInfo/ProfileInfo"
import ProfileTags from "../components/ProfileTags/ProfileTags"
import Proposals from "../components/Proposals/Proposals"
export default function Profile() {
    return (
        <div className="shadow">
            <ProfileInfo />
            <hr />
            <ProfileTags />
            <hr />
            <PanelInfo />
            <hr />
            <Proposals />
            <hr />
            <InternalReviews />
            <hr />
            <AmountOfFees />
        </div>
    )
}

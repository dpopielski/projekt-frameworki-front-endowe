import AmountOfFees from '../components/AmountOfFees';
import InternalReviews from '../components/InternalReviews';
import PanelInfo from '../components/PanelInfo';
import ProfileInfo from '../components/ProfileInfo';
import ProfileTags from '../components/ProfileTags';
import Proposals from '../components/Proposals';
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
  );
}

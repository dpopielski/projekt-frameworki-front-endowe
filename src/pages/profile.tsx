import ProfileInfo from "../components/ProfileInfo/ProfileInfo"
import ProfileTags from "../components/ProfileTags/ProfileTags"
export default function Profile() {
    return (
        <div className="shadow">
            <ProfileInfo />
            <hr />
            <ProfileTags />
        </div>
    )
}

import {useSelector} from "react-redux";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
        <div className="row">
            <div className="col-12">
                <h3>{profile.firstName} {profile.lastName}</h3>
                <div>
                    {profile.tuitCount} Tuits
                </div>
                <div>
                    <img className="wd-banner-picture" src={profile.bannerPicture} alt="banner"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                <div className="position-relative top-0 translate-middle-y ms-2 d-flex flex-row">
                    <img className="rounded-circle wd-profile-picture border border-light" src={profile.profilePicture} alt="profile"/>

                </div>
            </div>
            <div className="col-3">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-dark rounded-pill mt-2">Edit Profile</button>
                </div>
            </div>
        </div>
        <div className="row">
            <h4 className="font-weight-bold text-white">
                {profile.firstName} {profile.lastName}
            </h4>
            <div className="text-muted">
                @{profile.handle}
            </div>
            <div className="text-white">
                {profile.bio}
            </div>
        </div>
        <div className="row">
            <span className="text-muted">
                <i className="fas fa-map-marker-alt me-2"></i>
                {profile.location}
                <i className="fas fa-birthday-cake ms-3 me-2"></i>
                Born {profile.dateOfBirth}
                <i className="fas fa-calendar ms-3 me-2"></i>
                Joined {profile.dateJoined}
            </span>
        </div>
        <div className="row">
            <span className="">
                <span className="font-weight-bold text-white">{profile.followingCount}</span>
                <span className="text-muted ms-2">Following</span>
                <span className="font-weight-bold text-white ms-3">{profile.followersCount}</span>
                <span className="text-muted ms-2">Folowers</span>
            </span>

        </div>
        </>
    )
}

export default ProfileScreen;

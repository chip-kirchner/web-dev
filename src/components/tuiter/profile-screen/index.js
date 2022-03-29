import {useSelector, useDispatch} from "react-redux";
import React, {useState} from "react";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    const [editProfile, setEditProfile] = useState({edit: false});
    const [toUpdate, setToUpdate] = useState(profile);

    const editChangeHandler = () => {
        if (editProfile.edit === true) {
            console.log("setting to false");
            const newEditProfile = {edit: false};
            setEditProfile(newEditProfile);
        }else {
            console.log("setting to true");
            const newEditProfile = {edit: true};
            setEditProfile(newEditProfile);
        }
    };

    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        console.log(toUpdate);
        dispatch({
            type: 'update-profile',
            profile: toUpdate
        })
        editChangeHandler();
    }

    if (editProfile.edit === false){
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
                            <button onClick={editChangeHandler} className="btn btn-outline-dark rounded-pill mt-2">Edit Profile</button>
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
        );
    } else {
        return (
            <>
                <div className="row">
                    <div className="col-10">
                        <span>
                            <i onClick={editChangeHandler} className="fas fa-times fa-2x me-4"></i>
                            <h4 className="d-inline">Edit Profile</h4>
                        </span>
                    </div>
                    <div className="col-2">
                        <button onClick={saveProfileHandler} className="btn btn-dark rounded-pill">Save</button>
                    </div>
                </div>
                <div className="mt-2">
                    <img className="wd-banner-picture" src={profile.bannerPicture} alt="banner"/>
                </div>

                <div className="row">
                    <div className="col-9">
                        <div className="position-relative top-0 translate-middle-y ms-2 d-flex flex-row">
                            <img className="rounded-circle wd-profile-picture border border-light" src={profile.profilePicture} alt="profile"/>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <h4>First Name</h4>
                    <textarea onChange={(event) =>
                        setToUpdate({...toUpdate, firstName: event.target.value})}
                              className="textarea form-control wd-text-area text-dark" defaultValue={profile.firstName}>
                </textarea>

                    <h4>Last Name</h4>
                    <textarea
                        onChange={(event) =>
                            setToUpdate({...toUpdate, lastName: event.target.value})}
                        className="textarea form-control wd-text-area text-dark" defaultValue={profile.lastName}>
                </textarea>

                    <h4>Bio</h4>
                    <textarea
                        onChange={(event) =>
                            setToUpdate({...toUpdate, bio: event.target.value})}
                        className="textarea form-control wd-text-area text-dark" defaultValue={profile.bio}>
                </textarea>

                    <h4>Location</h4>
                    <textarea
                        onChange={(event) =>
                            setToUpdate({...toUpdate, location: event.target.value})}
                        className="textarea form-control wd-text-area text-dark" defaultValue={profile.location}>
                </textarea>

                    <h4>Date of Birth</h4>
                    <textarea
                        onChange={(event) =>
                            setToUpdate({...toUpdate, dateOfBirth: event.target.value})}
                        className="textarea form-control wd-text-area text-dark" defaultValue={profile.dateOfBirth}>
                </textarea>
                </div>
            </>
        );
    }

}

export default ProfileScreen;

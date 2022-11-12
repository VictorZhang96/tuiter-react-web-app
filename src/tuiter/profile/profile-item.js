import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile = useSelector(state => state.profile)
    return (
        <>
            <div className="fw-bold" style={{fontSize:20}}>{profile.firstName} {profile.lastName}</div>
            <div className="text-secondary"> {profile.numberOfTuits} Tuits</div>

            <img src={`../images/${profile.bannerPicture}`} className="w-100" alt="banner"/>
            <img src={`../images/${profile.profilePicture}`} height={120} className="rounded-circle position-relative wd-nudge-up-2" alt="avatar"/>
            <Link to="/tuiter/edit-profile" className="float-end mt-2 me-2 btn btn-outline-secondary rounded-pill"><span className="fw-bold text-dark">Edit profile</span></Link>

            <div className="p-2">
                <div className="fw-bold" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
                <div className="text-secondary mb-3">{profile.handle}</div>
                <div>{profile.bio}</div>
                <ul className="nav text-secondary">
                    <li className="nav-item pt-2 pb-2 pr-2">
                        <i className="bi bi-geo-alt" /> {profile.location}
                    </li>
                    <li className="nav-item p-2">
                        <i className="bi bi-balloon" /> {profile.dateOfBirth}
                    </li>
                    <li className="mav-item p-2">
                        <i className="bi bi-calendar3"/> {profile.dateJoined}
                    </li>
                </ul>
                <ul className="nav text-secondary">
                    <li className="nav-item pt-2 pb-2 pr-2">
                        <span className="fw-bold text-dark">{profile.followingCount}</span> Following
                    </li>
                    <li className="nav-item p-2">
                        <span className="fw-bold text-dark">{profile.followersCount}</span> Followers
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ProfileItem;
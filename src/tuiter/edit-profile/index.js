import React, {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const initialProfile = useSelector(state => state.profile)
    const [profile, setProfile] = useState(initialProfile)
    const dispatch = useDispatch();
    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
                                   ...profile,
                                   firstName: profile.firstName,
                                   lastName:profile.lastName,
                                   bio: profile.bio,
                                   location: profile.location,
                                   website: profile.website,
                                   dateOfBirth: profile.dateOfBirth}));

    }
    return(
        <>
            <div className="row">
                <div className="col-1 mt-2">
                    <Link to="../profile" className="bi bi-x-lg text-dark"/>
                </div>
                <div className="col-4 mt-2 fw-bold">
                    Edit Profile
                </div>
                <div className="col-7 mb-1">
                    <Link to="/tuiter/profile" className="btn btn-dark float-end rounded-pill"
                          onClick={(event) => updateProfileHandler(event)}> Save </Link>
                </div>
            </div>

            <img src={`../images/${profile.bannerPicture}`} className="w-100" alt="banner"/>
            <img src={`../images/${profile.profilePicture}`} height={120} className="rounded-circle position-relative wd-nudge-up-2" alt="avatar"/>

            <form id="textarea">
                <label>First Name:</label><br/>
                <input className="col-12"
                       onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                       value={profile.firstName}/>
            </form>
            <form id="textarea">
                <label>Last Name:</label><br/>
                <input className="col-12"
                       onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                       value={profile.lastName}/>
            </form>
            <form id="textarea">
                <label>Bio:</label><br/>
                <textarea className="col-12"
                          rows="3"
                          onChange={(e) => setProfile({...profile, bio: e.target.value})}
                          value={profile.bio}/>
            </form>
            <form id="textarea">
                <label>Location:</label><br/>
                <input className="col-12"
                       onChange={(e) => setProfile({...profile, location: e.target.value})}
                       value={profile.location}/>
            </form>
            <form id="textarea">
                <label>Website:</label><br/>
                <input className="col-12"
                       onChange={(e) => setProfile({...profile, website: e.target.value})}
                       value={profile.website}/>
            </form>
            <form id="textarea">
                <label>Birth Date:</label><br/>
                <input className="col-12"
                       onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                       value={profile.dateOfBirth}/>
            </form>
        </>
    );
};
export default EditProfile;
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item">
                <i className="bi bi-twitter"/>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"/>
                <span className="d-done d-xl-inline"> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action 
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"/>
                <span className="d-done d-xl-inline"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item list-group-item-action">
                Labs
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action  
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"/>
                <span className="d-done d-xl-inline"> Notifications</span>
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action  
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"/>
                <span className="d-done d-xl-inline"> Messages</span>
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action 
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"/>
                <span className="d-done d-xl-inline"> Bookmarks</span>
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action  
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"/>
                <span className="d-done d-xl-inline"> Lists</span>
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"/>
                <span className="d-done d-xl-inline"> Profile</span>
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"/>
                <span className="d-done d-xl-inline"> More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;


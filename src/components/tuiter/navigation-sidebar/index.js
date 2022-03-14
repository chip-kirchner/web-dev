import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = "explore"
    }) => {
    return(
        <div>
            <div className="list-group">
                <Link to="/" className = "list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/tuiter/home" className={`list-group-item ${active==='home' ? 'active' : ''}`}>
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active==='explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>
                </Link>
                <Link to="#" className={`list-group-item ${active==='notifications' ? 'active' : ''}`}>
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </Link>
                <a href="#" className={`list-group-item ${active==='messages' ? 'active' : ''}`}>
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline"> Messages</span>
                </a>
                <a href="bookmarks.html" className={`list-group-item ${active==='bookmarks' ? 'active' : ''}`}>
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </a>
                <a href="#" className={`list-group-item ${active==='lists' ? 'active' : ''}`}>
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline"> Lists</span>
                </a>
                <a href="profile.html" className={`list-group-item ${active==='profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline"> Profile</span>
                </a>
                <a href="#" className={`list-group-item ${active==='more' ? 'active' : ''}`}>
                    <span className="fa-stack small">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x text-secondary"></i>
                    </span>
                    <span className="d-none d-xl-inline"> More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;

import React from "react";

const NavigationSidebar = (
    {
        active = "explore"
    }) => {
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html" className={`list-group-item ${active==='home' ? 'active' : ''}`}>
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </a>
                <a href="../ExploreScreen/index.html" className={`list-group-item ${active==='explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>
                </a>
                <a href="#" className={`list-group-item ${active==='notifications' ? 'active' : ''}`}>
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </a>
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

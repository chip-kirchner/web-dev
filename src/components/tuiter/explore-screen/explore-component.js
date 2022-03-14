import PostSummaryList from "../post-summary-list";

const ExploreComponent = (
    {
        active = "for-you",
        image = "images/starship.jpg",
        title = "Spacex Starship"
    }
) => {
    return(
        <div>
            <i className="fa fa-search ms-2 mt-2 position-absolute"></i>
            <div className="row">
                <div className="col-11">
                    <input className="form-control wd-search" type="text" placeholder="Search Tuiter"/>
                </div>
                <div className="col-1">
                    <a href="explore-settings.html"><i className="fa fa-cog fa-2x"></i></a>
                </div>
            </div>
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a className={`nav-link ${active==='for-you' ? 'active' : ''}`} href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active==='trending' ? 'active' : ''}`} href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active==='news' ? 'active' : ''}`} href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active==='sports' ? 'active' : ''}`} href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${active==='entertainment' ? 'active' : ''}`} href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="position-relative">
                        <img className="wd-full-width" src={image}/>
                        <div className="position-absolute bottom-0 start-0 ms-1 mb-1 text-white fs-1">{title}</div>
                    </div>
                </div>
            </div>
            {<PostSummaryList/>}
        </div>
    );
}
export default ExploreComponent;
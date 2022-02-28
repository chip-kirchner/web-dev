import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <i class="fa fa-search ms-2 mt-2 position-absolute"></i>
        <div class="row">
            <div class="col-11">
                <input class="form-control wd-search" type="text" placeholder="Search Tuiter"/>
            </div>
            <div class="col-1">
                <a href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
            </div>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="row mt-2">
            <div class="col-12">
                <div class="position-relative">
                    <img class="wd-full-width" src="../images/starship.jpg"/>
                    <div class="position-absolute bottom-0 start-0 ms-1 mb-1 text-white fs-1">Spacex Starship</div>
                </div>
            </div>
        </div>
       ${PostSummaryList()}
    `);
}
export default ExploreComponent;

import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control border-0 rounded-pill bg-white" placeholder="Search Tuiter"/>
                        <span class="position-absolute" style="bottom: 6px; left: 20px;">
                        <i class="fas fa-search text-secondary"></i></span>
                    </div>
                </div>
                <div class="col-1">
                    <span class="fas fa-cog text-primary position-relative"
                          style="font-size: 1.5em; top: 7px"></span>
                </div>
            </div>
           <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="new.html">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">
                        Entertainment
                    </a>
                </li>
            </ul>
           <div class="position-relative">
                <img src="../../images/starship.jpeg" class="w-100"/>
                <h1 class="position-absolute bottom-0 left-0 text-white ps-1">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;


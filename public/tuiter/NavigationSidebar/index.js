const NavigationSidebar = () => {
    return (`
   <div class="list-group">
    <a href="../tuit.html"
        class="list-group-item list-group-item-action fab fa-twitter ">
    </a>
    <a href="../../labs/a5/challenge/HomeScreen/index.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-home"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Home</span>
    </a>
    <a href="../Explore/index.html"
       class="list-group-item list-group-item-action active">
        <i class="fas fa-hashtag"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Explore</span>
    </a>
    <a href="../notification.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-bell"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Notifications</span>
    </a>
    <a href="../messages.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Messages</span>
    </a>
    <a href="../bookmarks/index.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Bookmarks</span>
    </a>
    <a href="../lists.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Lists</span>
    </a>
    <a href="../profile.html"
       class="list-group-item list-group-item-action">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-inline" style="font-weight: normal">Profile</span>
    </a>
    <a href="../more.html" class="list-group-item list-group-item-action">
        <span class="fa-stack" style="font-size: 0.5em">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
        </span>
        <span class="d-none d-xl-inline" style="font-weight: normal">More</span>
    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
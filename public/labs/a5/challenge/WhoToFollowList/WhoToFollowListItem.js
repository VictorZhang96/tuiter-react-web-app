const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
    <div class="row flex-nowrap">
        <div class="col-2 d-flex flex-wrap align-items-center justify-content-center">
            <img src=${who.avatarIcon} class="rounded-circle" height="40px"/>
        </div>
        <div class="col-6">
            <div class="align-middle text-nowrap">
                <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
                <div class="text-secondary">@${who.handle}</div>
            </div>
        </div>
        <div class="col-4 d-flex flex-wrap align-items-center justify-content-end">
            <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
    </div>
    </li>
    `);
}
export default WhoToFollowListItem;
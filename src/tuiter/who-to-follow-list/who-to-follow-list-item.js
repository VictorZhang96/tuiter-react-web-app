import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row flex-nowrap">
                <div className="col-2 d-flex flex-wrap align-items-center justify-content-center">
                    <img alt="avatar" className="rounded-circle" height={48} src={`../images/${who.avatarIcon}`}/>
                </div>
                <div className="col-6">
                    <div className="align-middle text-nowrap">
                        <div className="fw-bold">{who.userName}
                            <i className="bi bi-check-circle-fill"></i></div>
                        <div className="text-secondary">@{who.handle}</div>
                    </div>
                </div>
                <div className="col-4 d-flex flex-wrap align-items-center justify-content-end">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;


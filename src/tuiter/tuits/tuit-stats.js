import React from "react";
const TuitsStats = ({tuit}) => {
    return (
        <>
            <ul className="nav mb-2 d-flex justify-content-around">
                <li className="nav-item">
                    <a href="/" className="nav-link text-secondary">
                        <i className="bi bi-chat"></i> {tuit.replies}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-secondary">
                        <i className="bi bi-recycle"></i> {tuit.retuits}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-secondary">
                        <i className={`bi ${tuit.liked?'text-danger bi-heart-fill':'bi-heart'}`}></i> {tuit.likes}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-secondary">
                        <i className="bi bi-share"></i>
                    </a>
                </li>
            </ul>
        </>
    );
}
 export default TuitsStats;
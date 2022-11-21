import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitsStats = ({tuit}) => {
    const dispatch = useDispatch();
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
                        <i onClick={() => dispatch(updateTuitThunk({
                                                                       ...tuit,
                                                                       likes: tuit.likes + 1
                                                                   }))}
                           className={`bi ${tuit.liked?'text-danger bi-heart-fill':'bi-heart'}`}></i> {tuit.likes}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-secondary">
                        <i onClick={() => dispatch(updateTuitThunk({
                                                                       ...tuit,
                                                                       dislikes: tuit.dislikes + 1
                                                                   }))}
                           className="bi-hand-thumbs-down-fill"></i> {tuit.dislikes}
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
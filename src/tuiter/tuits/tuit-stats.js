import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitsStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <ul className="nav mb-2 d-flex justify-content-around">
                <li className="nav-item">
                    <div className="nav-link text-secondary">
                        <i className="bi bi-chat"></i> {tuit.replies}
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link text-secondary">
                        <i className="bi bi-recycle"></i> {tuit.retuits}
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link text-secondary">
                        <i onClick={() => dispatch(updateTuitThunk({
                                                                       ...tuit,
                                                                       likes: tuit.likes + 1,
                                                                       liked: true
                                                                   }))}
                           className={`bi ${tuit.liked?'text-danger bi-heart-fill':'bi-heart'}`}></i> {tuit.likes}
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link text-secondary">
                        <i onClick={() => dispatch(updateTuitThunk({
                                                                       ...tuit,
                                                                       dislikes: tuit.dislikes + 1
                                                                   }))}
                           className="bi-hand-thumbs-down-fill"></i> {tuit.dislikes}
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link text-secondary">
                        <i className="bi bi-share"></i>
                    </div>
                </li>
            </ul>
        </>
    );
}
 export default TuitsStats;
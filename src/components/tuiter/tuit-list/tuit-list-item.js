import "./tuit.css";
import {useDispatch} from "react-redux";
import {deleteTuit}
    from "../actions/tuits-actions";
import TuitStats from "./tuit-stats";

const defaultTuit = {
    "_id": "234",
    "topic": "Default",
    "postedBy": {
        "username": "Default",
        "handle": "Default",
        "avatarIcon": "images/javascript.png",
    },
    "liked": true,
    "verified": true,
    "time": "1 day",
    "title": "JavaScript is programming language that can run on browsers as well as desktops",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 345,
        "dislikes": 0
    }
}

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    tuit = {...defaultTuit, ...tuit};
    return(
        <div>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="">
                        <img className="wd-image-circle" src={tuit.postedBy.avatarIcon === "" ? "images/user.png" : tuit.postedBy.avatarIcon} alt="Icon"/>
                    </div>
                    <div className="ms-1 flex-fill">
                        <div className="d-flex">
                            <div className="flex-grow-1 pe-3">
                                <span className="fw-bolder">
                                    {tuit.postedBy.userName}
                                    &nbsp;
                                </span>
                                <span className="text-muted">
                                    @{tuit.postedBy.handle}
                                    &nbsp;
                                </span>
                                {
                                    tuit.verified &&
                                    <span className="fa-stack small">
                                        <i className="fas fa-certificate fa-stack-2x"></i>
                                        <i className="fas fa-check fa-stack-1x text-secondary"></i>
                                    </span>
                                }
                                <span className="text-muted"> - {tuit.time}</span>
                            </div>
                            <i onClick={() => deleteTuit(dispatch, tuit)}
                               className="fas fa-times text-muted"></i>
                        </div>
                        <div className="mt-1 mb-2">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </li>
        </div>
    )
};
export default TuitListItem;
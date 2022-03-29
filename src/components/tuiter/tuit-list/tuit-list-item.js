import "./tuit.css";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({
                          tuit = {
                              "_id": "234",
                              "topic": "Space",
                              "postedBy": {
                                  "username": "Scott Manley"
                              },
                              "liked": true,
                              "verified": true,
                              "handle": "DJSnM",
                              "postedOn": "2020-12-10",
                              "time": "1 day",
                              "title": "JavaScript is programming language that can run on browsers as well as desktops",
                              "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              "logo-image": "images/javascript.png",
                              "avatarIcon": "images/javascript.png",
                              "tuits": "123K",
                              "stats": {
                                  "comments": 123,
                                  "retuits": 234,
                                  "likes": 345
                              }
                          }
                      }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
        <div>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="">
                        <img className="wd-image-circle" src={tuit.avatarIcon} alt="Icon"/>
                    </div>
                    <div className="ms-1 flex-fill">
                        <div className="d-flex">
                            <div className="flex-grow-1 pe-3">
                                <span className="fw-bolder">
                                    {tuit.postedBy.userName}
                                    &nbsp;
                                </span>
                                <span className="text-muted">
                                    @{tuit.handle}
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
                            <i onClick={() => deleteTuit(tuit)}
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
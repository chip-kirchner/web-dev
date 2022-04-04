import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();

    return (
        <div className="row me-2 ms-2">
            <div className="col-2">
                <img src="images/mario1.png" className="wd-image-circle" alt="avatar" />
            </div>
            <div className="col-10">
                <textarea className="textarea form-control wd-text-area text-secondary"
                          onChange={(event) =>
                              setWhatsHappening({...whatsHappening, tuit: event.target.value})}
                          placeholder="What's Happening?">
                </textarea>
                <div className="row border-top border-secondary mt-2 mb-2">
                    <span className="col-10 mt-2">
                        <i className="fas fa-image text-primary me-2"></i>
                        &nbsp;
                        <i className="fas fa-chart-bar text-primary me-2"></i>
                        &nbsp;
                        <i className="fas fa-smile text-primary me-2"></i>
                        &nbsp;
                        <i className="fas fa-calendar text-primary me-2"></i>
                    </span>
                    <div className="col-2 mt-2">
                        <button className="btn btn-primary rounded-pill" onClick={() => createTuit(dispatch, whatsHappening)}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;
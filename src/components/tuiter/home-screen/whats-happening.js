import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <div className="row me-2 ms-2">
            <div className="col-2">
                <img src="images/mario1.png" className="wd-image-circle" alt="avatar" />
            </div>
            <div className="col-10">
                <textarea className="textarea form-control wd-text-area text-secondary" value={whatsHappening}
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}
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
                        <button className="btn btn-primary rounded-pill" onClick={tuitClickHandler}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;
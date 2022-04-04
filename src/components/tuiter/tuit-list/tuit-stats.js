import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions"

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
    <div className="d-flex text-muted mt-2">
        <div className="flex-fill">
            <i className="far fa-comment"></i>
            &nbsp;
            {tuit.stats.comments}
        </div>
        <div className="flex-fill">
            <i className="fas fa-retweet"></i>
            &nbsp;
            {tuit.stats.retuits}
        </div>
        <div className="flex-fill">
            <span>
            {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   onClick={() => updateTuit(dispatch, {...tuit, liked: false, stats: {...tuit.stats, likes: tuit.stats.likes-1}})}
                   style={{color: 'red'}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-1"
                   onClick={() => updateTuit(dispatch, {...tuit, liked: true, stats: {...tuit.stats, likes: tuit.stats.likes+1}})}
                ></i>
            }
            {tuit.stats && tuit.stats.likes}
            </span>
        </div>
        <div className="flex-fill">
            <span>
            {
                tuit.disliked &&
                <i className="fas fa-thumbs-down me-1"
                   onClick={() => updateTuit(dispatch, {...tuit, disliked: false, stats: {...tuit.stats, dislikes: tuit.stats.dislikes-1}})}
                   style={{color: 'red'}}></i>
            }
                {
                    !tuit.disliked &&
                    <i className="far fa-thumbs-down me-1"
                       onClick={() => updateTuit(dispatch, {...tuit, disliked: true, stats: {...tuit.stats, dislikes: tuit.stats.dislikes+1}})}
                    ></i>
                }
                {tuit.stats && tuit.stats.dislikes}
            </span>
        </div>
        <div className="flex-fill">
            <i className="fas fa-upload"></i>
        </div>
    </div>
);
}
export default TuitStats;
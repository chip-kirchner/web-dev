import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
    <div className="row text-muted mt-2">
        <div className="col-3">
            <i className="far fa-comment"></i>
            &nbsp;
            {tuit.stats.comments}
        </div>
        <div className="col-3">
            <i className="fas fa-retweet"></i>
            &nbsp;
            {tuit.stats.retuits}
        </div>
        <div className="col-3">
            <span onClick={likeTuit}>
            {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   style={{color: 'red'}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-1"></i>
            }
            {tuit.stats && tuit.stats.likes}
            </span>
            &nbsp;
        </div>
        <div className="col-3">
            <i className="fas fa-upload"></i>
        </div>
    </div>
);
}
export default TuitStats;
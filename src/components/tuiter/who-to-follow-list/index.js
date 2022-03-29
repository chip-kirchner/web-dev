import WhoToFollowItem from "./who-to-follow-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <div>
            <ul className="list-group">
                {who.map(who => <WhoToFollowItem who={who}/>)}
            </ul>
        </div>
    ); };
export default WhoToFollowList;
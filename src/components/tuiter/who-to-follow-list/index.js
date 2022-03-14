import WhoToFollowItem from "./who-to-follow-item";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    who.map(who => {
                        return(
                            <WhoToFollowItem who ={who}/>
                        );
                    })
                }
            </ul>
        </div>
    ); };
export default WhoToFollowList;
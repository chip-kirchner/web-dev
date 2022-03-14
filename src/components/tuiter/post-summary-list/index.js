import posts from "./posts";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    posts.map(posts => {
                        return(
                            <PostSummaryItem post={posts}/>
                        );
                    })
                }
            </ul>
        </div>
);};

export default PostSummaryList;
import posts from "./post-items";
import PostListItem from "./post-list-item"

const PostList = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    posts.map(posts => {
                        return(
                            <PostListItem post={posts}/>
                        );
                    })
                }
            </ul>
        </div>
    );};

export default PostList;
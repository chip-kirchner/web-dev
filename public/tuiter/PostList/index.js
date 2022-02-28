import posts from "./PostItems.js";
import PostListItem from "./PostListItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${
        posts.map(posts => {
            return(PostListItem(posts));
        }).join('')
    }
        </ul>
`);};

export default PostSummaryList;
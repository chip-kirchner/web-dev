import PostSummary from "./post-summary";
import "./post.css";
const PostListItem = ({
      post = {
          "userName": "New York Post",
          "handle": "nypost",
          "avatarIcon": "images/nypostlogo.jpeg",
          "time": "23h",
          "comments": "965",
          "retweets": "2.4k",
          "likes": "4k",
          "text": "Grimes seen reading Karl Marx following split with world\"s richest man Elon Musk",
          "image": "images/grimes.png",
          "topic": "",
          "summary": "",
          "link": ""
      }
  }) => {
    return(
        <div>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="">
                        <img className="wd-image-circle" src={post.avatarIcon}/>
                    </div>
                    <div className="ms-1 flex-fill">
                        <div className="d-flex">
                            <div className="flex-grow-1 pe-3">
                                <span className="fw-bolder">
                                    {post.userName}
                                    &nbsp;
                                </span>
                                <span className="text-muted">
                                    @{post.handle}
                                    &nbsp;
                                </span>
                                <span className="fa-stack small">
                                    <i className="fas fa-certificate fa-stack-2x"></i>
                                    <i className="fas fa-check fa-stack-1x text-secondary"></i>
                                </span>
                                <span className="text-muted"> - {post.time}</span>
                            </div>
                            <i className="fas fa-ellipsis-h text-secondary"></i>
                        </div>
                        <div className="mt-1 mb-2">
                            {post.text}
                        </div>
                        <div className="">
                            <img className={`wd-full-width border-secondary ${post.topic !== '' ? 'wd-rounded-top border border-bottom-0':'border-bottom wd-rounded'}`} src={post.image}/>
                            {post.topic !== "" ?
                                <div className="border border-secondary wd-rounded-bottom">
                                    <div className="ms-2 me-2 mt-2"> {post.topic} </div>
                                    <div className="ms-2 me-2 text-muted">{post.summary}</div>
                                    <div className="ms-2 mb-2 text-muted"><i className="fas fa-link"></i> &nbsp; {post.link}</div>
                                </div>
                                : ""}
                        </div>
                        <div className="row text-muted mt-2">
                            <div className="col-3">
                                <i className="far fa-comment"></i>
                                &nbsp;
                                {post.comments}
                            </div>
                            <div className="col-3">
                                <i className="fas fa-retweet"></i>
                                &nbsp;
                                {post.retweets}
                            </div>
                            <div className="col-3">
                                <i className="far fa-heart"></i>
                                &nbsp;
                                {post.likes}
                            </div>
                            <div className="col-3">
                                <i className="fas fa-upload"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
};
export default PostListItem;

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "images/react.png"
        }
    }) => {
    return(
        <div>
        <li className="list-group-item">
            <div className="d-flex">
                <div className="flex-grow-1 pe-3">
                    <div className="text-muted">
                        {post.topic}
                    </div>
                    <div>
                        <span className="fw-bolder">
                            {post.userName}
                        </span>
                        <span className="fa-stack small">
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x text-secondary"></i>
                        </span>
                        <span className="text-muted"> - {post.time}</span>
                    </div>
                    <div className="fw-bold fs-6">
                        {post.title}
                    </div>
                </div>
                <div>
                    <img className="ms-2 wd-image-84x84" src={post.image}/>
                </div>
            </div>
        </li>
        </div>
    )
};

export default PostSummaryItem;
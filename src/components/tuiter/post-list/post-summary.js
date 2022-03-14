const PostSummary = (
    post = {
        topic: "",
        summary: "",
        link: ""
    }
) => {
    return (
        <>
            <div className="border border-secondary wd-rounded-bottom">
                <div className="ms-2 me-2 mt-2"> {post.topic} </div>
                <div className="ms-2 me-2 text-muted">{post.summary}</div>
                <div className="ms-2 mb-2 text-muted"><i className="fas fa-link"></i> &nbsp; {post.link}</div>
            </div>
        </>
    )
};

export default PostSummary
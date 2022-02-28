const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex">
                <div class="flex-grow-1 pe-3">
                    <div class="text-muted">
                        ${post.topic}
                    </div>
                    <div>
                        <span class="fw-bolder">
                            ${post.userName}
                        </span>
                        <span class="fa-stack small">
                            <i class="fas fa-certificate fa-stack-2x"></i>
                            <i class="fas fa-check fa-stack-1x text-secondary"></i>
                        </span>
                        <span class="text-muted"> - ${post.time}</span>
                    </div>
                    <div class="fw-bold fs-6">
                        ${post.title}
                    </div>
                </div>
                <div>
                    <img class="ms-2 wd-image-84x84" src="${post.image}">
                </div>
            </div>
        </li>
    `)
};

export default PostSummaryItem;
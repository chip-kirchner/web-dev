const PostListItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex">
                <div class="">
                    <img class="wd-image-circle" src="${post.avatarIcon}"/>
                </div>
                <div class="ms-1 flex-fill">
                    <div class="d-flex">
                        <div class="flex-grow-1 pe-3">
                            <span class="fw-bolder">
                                ${post.userName}
                                &nbsp;
                            </span>
                            <span class="text-muted">
                                @${post.handle}
                                &nbsp;
                            </span>
                            <span class="fa-stack small">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fas fa-check fa-stack-1x text-secondary"></i>
                            </span>
                            <span class="text-muted"> - ${post.time}</span>
                        </div>
                        <i class="fas fa-ellipsis-h text-secondary"></i>
                    </div>
                    <div class="mt-1 mb-2">
                        ${post.text}
                    </div>
                    <div class="">
                        <img class="wd-full-width border-secondary ${post.topic !== '' ? 'wd-rounded-top border border-bottom-0':'border-bottom wd-rounded'}" src="${post.image}"/>
                        ${post.topic !== '' ? `
                            <div class="border border-secondary wd-rounded-bottom">
                                <div class="ms-2 me-2 mt-2"> ${post.topic} </div>
                                <div class="ms-2 me-2 text-muted">${post.summary}</div>
                                <div class="ms-2 mb-2 text-muted"><i class="fas fa-link"></i> &nbsp; ${post.link}</div>
                            </div>
                        ` : ``}
                        
                    </div>
                    <div class="row text-muted mt-2">
                        <div class="col-3">
                            <i class="far fa-comment"></i>
                            &nbsp;
                            ${post.comments}
                        </div>
                        <div class="col-3">
                            <i class="fas fa-retweet"></i>
                            &nbsp;
                            ${post.retweets}
                        </div>
                        <div class="col-3">
                            <i class="far fa-heart"></i>
                            &nbsp;
                            ${post.likes}
                        </div>
                        <div class="col-3">
                            <i class="fas fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `)
};
export default PostListItem;
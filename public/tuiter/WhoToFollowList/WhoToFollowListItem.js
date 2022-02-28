const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                 <div class="col-2">
                    <img src="${who.avatarIcon}" class="wd-image-circle">
                </div>
                <div class="col-10">
                    <button class="position-absolute top-50 end-0 translate-middle-y me-2 btn btn-primary rounded-pill"> Follow </button>
                    <div>
                        <span class="fw-bold wd-front">${who.userName}</span>
                        <span class="fa-stack small">
                            <i class="fas fa-certificate fa-stack-2x"></i>
                            <i class="fas fa-check fa-stack-1x text-secondary"></i>
                        </span>
                    </div>
                    <div class="text-secondary">@${who.handle}</div>
                </div>
            </div>
        </li>
    `);
};
export default WhoToFollowListItem;

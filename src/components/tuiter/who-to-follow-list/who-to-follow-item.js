import "../style.css"

const WhoToFollowItem = (
    {who = {
        avatarIcon: 'images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
    }) => {
    return(
        <div>
            <li className="list-group-item">
                <div className="row">
                     <div className="col-2">
                        <img src={who.avatarIcon} className="wd-image-circle" alt="avatar" />
                    </div>
                    <div className="col-10">
                        <button className="position-absolute top-50 end-0 translate-middle-y me-2 btn btn-primary rounded-pill"> Follow </button>
                        <div>
                            <span className="fw-bold wd-front">{who.userName}</span>
                            <span className="fa-stack small">
                                <i className="fas fa-certificate fa-stack-2x"></i>
                                <i className="fas fa-check fa-stack-1x text-secondary"></i>
                            </span>
                        </div>
                        <div className="text-secondary">@{who.handle}</div>
                    </div>
                </div>
            </li>
        </div>
    );
};
export default WhoToFollowItem;

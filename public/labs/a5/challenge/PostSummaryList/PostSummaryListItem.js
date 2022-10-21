const PostSummaryListItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="d-inline fw-bold">${post.userName}
                    <i class="fa fa-check-circle"></i>
                    <span class="text-secondary fw-normal">- ${post.time}</span>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
            </div>
            <div class="col-2">
                <img class="float-end" src=${post.image} height="100px">
            </div>
        </div>
    </li>
    `);
}
export default PostSummaryListItem;
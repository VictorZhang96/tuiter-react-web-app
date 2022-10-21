const PostItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="row">
          <div class = "col-2">
              <img class="rounded-circle w-100" src="${post.avatarIcon}">
          </div>
          <div class="col-10 ">
              <div>
                  <span>
                        ${post.userName} 
                        <i class="fas fa-check-circle"></i>
                        <span class="text-secondary">
                            @ ${post.handle} 
                            - ${post.time}
                        </span>
                  </span>
              </div>
              <div class="pb-2">
                ${post.topic}
              </div>
              <div class="border border-secondary rounded-4">
                <div>
                    <img src="${post.image}" width="100%">
                </div>
                
                <div class="border-top border-secondary p-2">
                    <div>
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${post.content}
                    </div>
                    <div class="text-secondary">
                        ${post.source}
                    </div>
                </div>
              </div>
              <div class="row">
                    <ul class="nav mb-2 nav-tabs d-flex justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">
                                <i class="far fa-comment"></i>
                                ${post.comments}
                            </a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">
                                <i class="fas fa-retweet"></i>
                                ${post.retweets}
                            </a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">
                                <i class="fas fa-heart"></i>
                                ${post.likes}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">
                                <i class="fas fa-share"></i>
                            </a>
                        </li>
                    </ul>
              </div>
          </div>
        </div>
    </li>
  `)
}
export default PostItem
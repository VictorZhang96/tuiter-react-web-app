import React from "react";

const PostsListItem = (
    {
        post = {
            "topic": "Amazing show about @Inspiration4x mission!",
            "userName": "Elon Musk ",
            "handle": "elonmusk",
            "time": "23h",
            "avatarIcon": "elonmusk.jpg",
            "image": "inspiration4.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "source": "netflix.com",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes":"37.5K"
        }}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="avatar icon" className="rounded-circle w-100" src={`../images/${post.avatarIcon}`}/>
                </div>
                <div className="col-10 ">
                    <div>
                  <span>
                        {post.userName}
                      <i className="bi bi-check-circle-fill text-primary"></i>
                        <span className="text-secondary"> @ {post.handle} - {post.time}
                        </span>
                  </span>
                    </div>
                    <div className="pb-2">
                        {post.topic}
                    </div>
                    <div className="border border-secondary rounded-4">
                        <div>
                            <img alt="" src={`../images/${post.image}`} width="100%"/>
                        </div>

                        <div className="border-top border-secondary p-2">
                            <div>
                                {post.title}
                            </div>
                            <div className="text-secondary">
                                {post.content}
                            </div>
                            <div className="text-secondary">
                                {post.source}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="nav mb-2 nav-tabs d-flex justify-content-around">
                            <li className="nav-item">
                                <a href="/" className="nav-link text-secondary">
                                    <i className="bi bi-chat"></i>
                                    {post.comments}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-secondary">
                                    <i className="bi bi-recycle"></i>
                                    {post.retweets}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-secondary">
                                    <i className="bi bi-heart"></i>
                                    {post.likes}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-secondary">
                                    <i className="bi bi-upload"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostsListItem;
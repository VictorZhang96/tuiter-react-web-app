import React from "react";
import posts from './posts.json';
import PostsListItem from "./posts-list-item";

const PostsList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post => <PostsListItem
                    key={post._id} post={post}/>)
            }
        </ul>
    );

};
export default PostsList
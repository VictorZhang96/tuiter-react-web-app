import PostSummaryListItem from "./PostSummaryListItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${exploreItems.map(post => {
        return(PostSummaryListItem(post));
    }).join('')}
        </ul>
    `);
}

export default PostSummaryList;
import { Link } from 'react-router-dom';
import moment from 'moment';

export function FullCard ({ post }) {
    let link;
    if (post.post_hint === 'image') {
        link = <img src={post.url} alt='media preview' />
    } else {
        link = post.thumbnail ?
        <a href={post.url} target='_blank'><img src={post.thumbnail} alt='media preview' /></a> :
        <a href={post.url} target='_blank'>{post.url}</a>
    }
    return (
        <div>
            <span>{post.score}</span>
            <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>
            <span>{moment.unix(post.created_utc).fromNow()}</span>
            <h1>{post.title}</h1>
            {post.is_self || link}
            <img src='/comments-icon.png' alt='comments icon' />
            <span>{post.num_comments} comments</span>
        </div>
    )
}
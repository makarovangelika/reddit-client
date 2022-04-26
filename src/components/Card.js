import { Link } from 'react-router-dom';
import moment from 'moment';

export function Card({ post, showSubreddit }) {
    let link = post.thumbnail ?
        <a href={post.url} target='_blank'><img src={post.thumbnail} alt='media preview' /></a> :
        <a href={post.url} target='_blank'>{post.url}</a>
    return (
        <Link to={`/${post.subreddit}/${post.id}`}>
            <div>
                <span>{post.score}</span>
                <span>{moment.unix(post.created_utc).fromNow()}</span>
                {showSubreddit && <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>}
                <h2>{post.title}</h2>
                {post.is_self || link}
                <Link to={`/${post.subreddit}/${post.id}`}>
                    <img src='./comments-icon.png' alt='comments icon' />
                    <span>{post.num_comments} comments</span>
                </Link>
            </div>
        </Link>
    );
}
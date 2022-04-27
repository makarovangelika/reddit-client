import { Link } from 'react-router-dom';
import moment from 'moment';

export function Card({ post, showSubreddit }) {
    let link = post.thumbnail ?
        <img src={post.thumbnail} alt='media preview' /> :
        <a href={post.url} target='_blank'>{post.url}</a>
    return (
        <Link to={`/${post.subreddit}/${post.id}`}>
            <div>
                <span>{post.score}</span>
                {showSubreddit && <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>}
                <span>{moment.unix(post.created_utc).fromNow()}</span>
                <h2>{post.title}</h2>
                {post.is_self || link}
                <Link to={`/${post.subreddit}/${post.id}`}>
                    <img src='/comments-icon.png' alt='comments icon' />
                    <span>{post.num_comments} comments</span>
                </Link>
            </div>
        </Link>
    );
}
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../Card/Card.css';

export function FullCard ({ post }) {
    let content;
    if (post.post_hint === 'image') {
        content = <img src={post.url} alt='media preview' />
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
        <a href={post.url} target='_blank'><img src={post.thumbnail} alt='media preview' /></a> :
        <a href={post.url} target='_blank'>{post.url}</a>
    }
    return (
        <div>
            <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>
            <span>{moment.unix(post.created_utc).fromNow()}</span>
            <h1 className='post-title'>{post.title}</h1>
            {post.is_self ? <p>{post.selftext}</p> : content}
            <span>{post.score}</span>
            <img src='/comments-icon.png' alt='comments icon' />
            <span>{post.num_comments} {post.num_comments === 1 ? 'comment' : 'comments'}</span>
        </div>
    )
}
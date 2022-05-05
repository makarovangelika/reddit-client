import { Link } from 'react-router-dom';
import moment from 'moment';
import '../Card/Card.css';
import './FullCard.css';
import { MarkdownText } from '../Comment/MarkdownText';

export function FullCard ({ post }) {
    let content;
    if (post.post_hint === 'image') {
        content = <div className='post-image full-card-image'>
            <img src={post.url} alt='media preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
        <a href={post.url} target='_blank'><img src={post.thumbnail} alt='media preview' /></a> :
        <a className='post-link' href={post.url} target='_blank'>{post.url}</a>
    }
    let thumbnailClass = post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' && !post.is_self ?
        'thumbnail-post' :
        '';
    return (
        <div className='full-card'>
            <Link className='subreddit-link' to={`/${post.subreddit}`}>{post.subreddit}</Link>
            <span className='post-time'>{moment.unix(post.created_utc).fromNow()}</span>
            <div className={`post-content ${thumbnailClass}`}>
                <h1 className='post-title'>{post.title}</h1>
                {post.is_self ? <MarkdownText body={post.selftext} /> : content}
            </div>
            <div className='post-panel'>
                <span className='score'>{post.score}</span>
                <div className='comments-link'>
                    <img src='/comments-icon.png' alt='comments icon' />
                    <span>{post.num_comments} {post.num_comments === 1 ? 'comment' : 'comments'}</span>
                </div>
            </div>
        </div>
    )
}
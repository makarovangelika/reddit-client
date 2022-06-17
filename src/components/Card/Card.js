import moment from 'moment';
import './Card.css';
import { HashLink as Link } from 'react-router-hash-link';

export function Card({ post, showSubreddit }) {
    let content;
    if (post.post_hint === 'image') {
        content = <div className='post-image'>
            <img src={post.url} alt='media preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
        <a href={post.url} target='_blank' rel='noreferrer' ><img src={post.thumbnail} alt='media preview' /></a> :
        <a className='post-link' href={post.url} target='_blank' rel='noreferrer' >{post.url}</a>
    }
    let thumbnailClass = post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' ?
        'thumbnail-post' :
        '';
    return (
        <div className='reddit-card'>
            {showSubreddit && <Link className='subreddit-link' to={`/${post.subreddit}`}>{post.subreddit}</Link>}
            <span className='post-time'>{moment.unix(post.created_utc).fromNow()}</span>
            <div className={thumbnailClass}>
                    <Link data-testid={post.id} to={`/${post.subreddit}/${post.id}`}>
                        <h2 className='post-title'>{post.title}</h2>
                    </Link>
                    {post.is_self || content}
            </div>
            <div className='post-panel'>
                <span className='score'>{post.score}</span>
                <Link className='comments-link' to={`/${post.subreddit}/${post.id}#comments`}>
                    <img src='/comments-icon.png' alt='comments icon' />
                    <span>{post.num_comments} {post.num_comments === 1 ? 'comment' : 'comments'}</span>
                </Link>
            </div>
        </div>
    );
}
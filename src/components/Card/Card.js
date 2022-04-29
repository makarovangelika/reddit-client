import { Link } from 'react-router-dom';
import moment from 'moment';
import './Card.css';
import { useEffect } from 'react';

export function Card({ post, showSubreddit }) {
    let content;
    if (post.post_hint === 'image') {
        content = <div className='post-image'>
            <img src={post.url} alt='media preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
        <img src={post.thumbnail} alt='media preview' /> :
        <a className='post-link' href={post.url} target='_blank'>{post.url}</a>
    }
    return (
            <Link to={`/${post.subreddit}/${post.id}`}>
                <div className='reddit-card'>
                    {showSubreddit && <Link className='subreddit-link' to={`/${post.subreddit}`}>{post.subreddit}</Link>}
                    <span className='post-time'>{moment.unix(post.created_utc).fromNow()}</span>
                    {post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' ?
                        <div className='thumbnail-post'>
                            <h2 className='post-title'>{post.title}</h2>
                            {post.is_self || content}
                        </div> :
                        <div>
                            <h2 className='post-title'>{post.title}</h2>
                            {post.is_self || content}
                        </div>}
                    <div className='post-panel'>
                        <span className='score'>{post.score}</span>
                        <Link className='comments-link' to={`/${post.subreddit}/${post.id}`}>
                            <img src='/comments-icon.png' alt='comments icon' />
                            <span>{post.num_comments} {post.num_comments === 1 ? 'comment' : 'comments'}</span>
                        </Link>
                    </div>
                </div>
            </Link>
    );
}
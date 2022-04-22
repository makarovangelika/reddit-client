import { Link } from 'react-router-dom';
export function Card({ post, subreddit }) {
    return (
        <div>
            <Link to={`/${subreddit}`}>{subreddit}</Link>
            <h2>{post.title}</h2>
            <span>Rating: {post.rating}</span>
            <span>Comments: {post.comments}</span>
        </div>
    );
}
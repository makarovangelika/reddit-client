import { useParams } from 'react-router-dom';
import { fetchPost } from '../../api/reddit';
import { useEffect, useState } from 'react';
import { FullCard } from '../FullCard/FullCard';
import { Comment } from '../Comment/Comment';
import './Post.css';

export function Post() {
    let { postId } = useParams();

    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(false);

    useEffect(() => {
        fetchPost(postId)
            .then(response => {
                setPost(response[0].data.children[0].data);
                setComments(response[1].data.children.filter(comment => {
                    return comment.kind !== 'more';
                }).map(comment => {
                    return comment.data;
                }));
                setIsLoading(false);
            })
            .catch(() => {
                setError(true);
            })
    }, [postId, error]);

    return (
        error ? <p className='error'>Cannot load the post. Try to check your internet connection or change the url and reload the page.</p> :
            (isLoading ? <span className='loading'>Loading...</span> :
                <div data-testid='post-card' className='post-card'>
                    <FullCard post={post} />
                    <div className='comments-list'>
                        {comments.map(comment => {
                            return <Comment key={comment.id} comment={comment} />
                        })}
                    </div>
                </div>
            )
    )
}
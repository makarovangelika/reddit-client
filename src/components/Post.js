import { useParams } from 'react-router-dom';
import { fetchPost } from '../api/reddit';
import { useEffect, useState } from 'react';
import { FullCard } from './FullCard';
import { Comment } from './Comment';

export function Post() {
    let { postId } = useParams();

    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPost(postId).
            then(response => {
                setPost(response[0].data.children[0].data);
                setComments(response[1].data.children.map(comment => comment.data));
                setIsLoading(false);
            })
    }, [postId]);

    return (
        isLoading ?
            <span>Loading...</span> :
            <div>
                <img src='/close-icon.png' alt='icon to close the post' />
                <span>Close</span>
                <FullCard post={post} />
                {comments.map(comment => {
                    return <Comment comment={comment} />
                })}
            </div>
    )
}
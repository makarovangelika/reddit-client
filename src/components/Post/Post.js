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

    useEffect(() => {
        fetchPost(postId).
            then(response => {
                setPost(response[0].data.children[0].data);
                setComments(response[1].data.children.map(comment => {
                    if (comment.kind !== 'more') {
                        return comment.data;
                    }
                }));
                setIsLoading(false);
            })
    }, [postId]);

    return (
        isLoading ?
            <span>Loading...</span> :
            <div className='post-card'>
                <FullCard post={post} />
                <div className='comments-list'>
                    {comments.map(comment => {
                        if (comment)
                        return <Comment key={comment.id} comment={comment} />
                    })}
                </div>
            </div>
    )
}
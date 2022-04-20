import { useParams } from 'react-router-dom';

export function Post() {
    let { postId } = useParams();
    return <h1>Post {postId}</h1>;
}
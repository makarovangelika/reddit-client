import { useParams } from 'react-router-dom';

export function Subreddit() {
    let { subreddit } = useParams();
    return <h1>{subreddit}</h1>;
}
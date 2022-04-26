import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card } from './Card';
import { fetchSubredditPosts } from '../api/reddit';

export function Subreddit() {
    let { subreddit } = useParams();
    subreddit ||= 'popular';
    let showSubreddit = subreddit === 'popular';
    let [subredditPosts, setSubredditPosts] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetchSubredditPosts(subreddit)
            .then(response => {
                setSubredditPosts(response);
                setIsLoading(false);
            })
    }, [subreddit]);
    return (
        <div>
            <h1>{showSubreddit ? 'Popular posts' : subreddit}</h1>
            {isLoading ? <span>Loading...</span> : subredditPosts.map(post => {
                return <Card key={post.id} post={post} showSubreddit={showSubreddit}/>
            })}
        </div>
    );
}
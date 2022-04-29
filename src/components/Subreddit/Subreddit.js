import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { fetchSubredditPosts } from '../../api/reddit';
import './Subreddit.css';

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
        <div className='subreddit-posts'>
            <h1 className='subreddit-title'>{showSubreddit ? 'Popular posts' : subreddit}</h1>
            {isLoading ? <span>Loading...</span> : subredditPosts.map(post => {
                return <Card key={post.id} post={post} showSubreddit={showSubreddit}/>
            })}
        </div>
    );
}
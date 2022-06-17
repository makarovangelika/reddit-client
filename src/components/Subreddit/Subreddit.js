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
    let [error, setError] = useState(false);
    
    useEffect(() => {
        fetchSubredditPosts(subreddit)
            .then(response => {
                setSubredditPosts(response);
                setIsLoading(false);
            })
            .catch(() => {
                setError(true);
            })
    }, [subreddit, error]);
    return (
        error ? <p className='error'>Cannot load the posts. Try to check your internet connection or change the url and reload the page.</p> :
            <div data-testid='subreddit-posts' className='subreddit-posts'>
                <h1 className='subreddit-title'>{showSubreddit ? 'Popular posts' : subreddit}</h1>
                {isLoading ? <span className='loading'>Loading...</span> :
                    subredditPosts.map(post => {
                        return <Card key={post.id} post={post} showSubreddit={showSubreddit}/>
                    })}
            </div>
    );
}
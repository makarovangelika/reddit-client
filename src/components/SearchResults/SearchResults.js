import { Card } from '../Card/Card';
import { useEffect, useState } from 'react';
import { getSearchResults } from '../../api/reddit';
import { useSearchParams } from 'react-router-dom';

export function SearchResults() {
    let [results, setResults] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    let term = searchParams.get('q');
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(false);
    useEffect(() => {
        getSearchResults(term)
            .then(response => {
                setResults(response);
                setIsLoading(false);
            })
            .catch(() => setError(true))
    }, [term, error]);
    return (
        error ? <p className='error'>Cannot load the posts. Try to check your internet connection or change the url and reload the page.</p> :
        <div className='subreddit-posts'>
                {isLoading ? <span className='loading'>Loading...</span> :
                results.map(post => {
                        return <Card key={post.id} post={post} showSubreddit={true}/>
                    })}
        </div>
    )
}
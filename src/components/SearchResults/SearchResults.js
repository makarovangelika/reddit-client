import { Card } from '../Card/Card';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchResults } from '../Header/SearchSlice';
import { useSelector, useDispatch } from 'react-redux';

export function SearchResults() {
    let results = useSelector(state => state.search.results);
    let [searchParams] = useSearchParams();
    let term = searchParams.get('q');
    let isLoading = useSelector(state => state.search.isLoading);
    let error = useSelector(state => state.search.error);
    let dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchResults(term));
    }, [dispatch, term, error]);
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
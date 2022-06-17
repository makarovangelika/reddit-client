import './Header.css';
import { Link, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm, clearTerm } from './SearchSlice';

export function Header() {
    let term = useSelector(state => state.search.term);
    let dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();
    let handleTermChange = e => dispatch(setTerm(e.target.value));
    let goToResults = (e) => {
        e.preventDefault();
        navigate({
            pathname: 'search',
            search: `?${createSearchParams({
                q: term
            })}`
        });
    }
    useEffect(() => {
        if (location.pathname !== '/search') {
            dispatch(clearTerm());
        }
    }, [location, dispatch]);
    return (
        <header>
            <div className='header-bar'>
                <Link to='/'>
                    <img className='logo' src='/reddit-logo.svg' alt='reddit logo' />
                </Link>
                <form className='search-bar' onSubmit={goToResults}>
                    <label className='search-label' htmlFor='search-input'>
                        <img src='/search-icon.svg' alt='search icon' />
                    </label>
                    <input id='search-input' value={term} type='search' placeholder='Search Reddit' onChange={handleTermChange} />
                </form>
            </div>
        </header>
    );
}
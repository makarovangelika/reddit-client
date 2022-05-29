import './Header.css';
import { Link, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Header() {
    let [term, setTerm] = useState('');
    let location = useLocation();
    let navigate = useNavigate();
    let handleTermChange = e => setTerm(e.target.value);
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
        if (term && location.pathname !== '/search') {
            setTerm('');
        }
    }, [location]);
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
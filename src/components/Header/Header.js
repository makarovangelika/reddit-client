import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
    let [term, setTerm] = useState('');
    let handleTermChange = e => setTerm(e.target.value);
    let search;
    return (
        <header>
            <div className='header-bar'>
                <Link to='/'>
                    <img className='logo' src='/reddit-logo.svg' alt='reddit logo' />
                </Link>
                <form className='search-bar' onSubmit={search}>
                    <label className='search-label' htmlFor='search-input'>
                        <img src='/search-icon.svg' alt='search icon' />
                    </label>
                    <input id='search-input' placeholder='Search Reddit' onChange={handleTermChange} />
                </form>
            </div>
        </header>
    );
}
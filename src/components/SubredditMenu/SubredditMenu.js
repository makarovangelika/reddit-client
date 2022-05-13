import { useEffect, useState } from 'react';
import { getSubreddits } from '../../api/reddit';
import { NavLink } from 'react-router-dom';
import './SubredditMenu.css';

export function SubredditMenu() {
    let [subreddits, setSubreddits] = useState([]);
    useEffect(() => {
        getSubreddits()
            .then(response => setSubreddits(response))
    });
    return (
        <nav className='subreddit-menu'>
            {subreddits.map(subreddit => {
                return <NavLink to={`/${subreddit.display_name}`} key={subreddit.id}>
                    {subreddit.icon_img ?
                        <img className='subreddit-icon' src={subreddit.icon_img} alt='icon of the subreddit' /> :
                        <div className='subreddit-icon'></div>}
                    <span>{subreddit.display_name}</span>
                </NavLink>
            })}
        </nav>
    )
}
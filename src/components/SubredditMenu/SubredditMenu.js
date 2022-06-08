import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SubredditMenu.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits } from './SubredditsSlice';

export function SubredditMenu() {
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const isLoading = useSelector(state => state.subreddits.isLoading);
    const error = useSelector(state => state.subreddits.error);
    const dispatch = useDispatch();
    const [openedMenu, setOpenedMenu] = useState(false);
    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    }
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        isLoading || error ||
        <div className={`subreddit-menu ${openedMenu ? 'opened' : ''}`}>
            <div onClick={toggleMenu} className='toggler'>
                <div className='open'>
                    <img src='/burger-menu.svg' alt='hamburger menu icon' />
                </div>
                <div className='close'>
                    <img src='/close-icon.svg' alt='icon to close menu' />
                </div>
            </div>
            <nav className='subreddit-links'>
                {subreddits.map(subreddit => {
                    return <NavLink onClick={toggleMenu} to={`/${subreddit.display_name}`} key={subreddit.id}>
                        {subreddit.icon_img ?
                            <img className='subreddit-icon' src={subreddit.icon_img} alt='icon of the subreddit' /> :
                            <div className='subreddit-icon'></div>}
                        <span>{subreddit.display_name}</span>
                    </NavLink>
                })}
            </nav>
        </div>
    )
}
import {Link}  from 'react-router-dom';
import style from './MainNavigation.module.css'

function MainNavigation() {
    return <div>
        <header className={style.header}>Main Navigation
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutme">About Me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </header>
    </div>
}

export default MainNavigation;
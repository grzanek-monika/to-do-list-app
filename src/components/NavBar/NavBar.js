import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className={styles.navBar}>           
            <div className={styles.links}>
                <Link to='/'><span className='fa fa-tasks tasks_icon'/></Link>
            </div>     
            <div>
                <ul className={styles.links}>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">
                            Favorite
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>     
    )
}

export default NavBar;
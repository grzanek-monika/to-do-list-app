import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className={styles.navBar}>           
            <div className={styles.links}>
                <Link to='/'><span className='fa fa-tasks tasks_icon'/></Link>
            </div>     
            <div>
                <ul className={styles.links}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorite'>Favorite</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>     
    )
}

export default NavBar;
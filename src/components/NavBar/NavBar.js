//import Container from "../Container/Container.js";
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <nav className={styles.navBar}>           
            <div className={styles.links}>
                <a href='/'><span className='fa fa-tasks tasks_icon'/></a>
            </div>     
            <div>
                <ul className={styles.links}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/favorite'>Favorite</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </nav>     
    )
}

export default NavBar;
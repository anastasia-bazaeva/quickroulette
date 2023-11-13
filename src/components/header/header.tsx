import { Link, NavLink } from "react-router-dom";
import styles from './header.module.css';
import commonStyles from '../../ui/common/common.module.css';

export const Header = () => {
    const linkClass = `${commonStyles.text} ${commonStyles.link}`
    return (
        <div className={styles.container}>
            <Link className={styles.logoZone} to='/'>
                <span className={styles.fancy}>QuickRoulette</span>
                </Link>
            <div className={styles.navBar}>
                <NavLink className={linkClass} to='/roulette'>
                    Что посмотреть
                </NavLink>
                <NavLink className={linkClass} to='/my-roulette'>
                    Рулетка 
                </NavLink>
                <NavLink className={linkClass} to=''>
                    О проекте 
                </NavLink>
            </div>
        </div>
    )
}
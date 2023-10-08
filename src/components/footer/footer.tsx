import { NavLink } from "react-router-dom";
import commonStyles from '../../ui/common/common.module.css';
import styles from './footer.module.css'

export const Footer = () => {
    const linkClass = `${commonStyles.smallText} ${commonStyles.link}`
    return (
        <footer className={styles.container}>
            <ul className={styles.column}>
            <NavLink className={linkClass} to=''>
                Что посмотреть
            </NavLink>
            <NavLink className={linkClass} to=''>
                Рулетка 
            </NavLink>
            <NavLink className={linkClass} to=''>
                О проекте 
            </NavLink>
            </ul>
            
            <ul className={styles.column}>
            <NavLink className={linkClass} to=''>
                Что посмотреть
            </NavLink>
            <NavLink className={linkClass} to=''>
                Рулетка 
            </NavLink>
            <NavLink className={linkClass} to=''>
                О проекте 
            </NavLink>
            </ul>
            <p>Сделано @cosm0nastya</p>

        </footer>
    )
}
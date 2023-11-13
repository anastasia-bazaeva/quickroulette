import { NavLink } from "react-router-dom";
import commonStyles from '../../ui/common/common.module.css';
import styles from './footer.module.css'

export const Footer = () => {
    const linkClass = `${commonStyles.smallText} ${commonStyles.link}`
    return (
        <footer className={styles.container}>
            <ul className={styles.column}>
            <NavLink className={linkClass} to='/roulette'>
                Что посмотреть
            </NavLink>
            <NavLink className={linkClass} to='my-roulette'>
                Рулетка 
            </NavLink>
            <NavLink className={linkClass} to='/about'>
                О проекте 
            </NavLink>
            </ul>
            <p>Сделала @anastasia-bazaeva в 2023</p>

        </footer>
    )
}
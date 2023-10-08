import { loaderPic } from "utils/utils";
import styles from './loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.textArea}><p className={styles.text}>Здесь можно наткнуться на странные,</p> <p className={styles.text}> ОЧЕНЬ странные дела...</p></span>
            <img className={styles.picture} src={loaderPic} alt='Изображение крутящейся спирали загрузки'/>
        </div>
    )
}
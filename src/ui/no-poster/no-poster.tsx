import { pickRandPick } from 'utils/utils'
import styles from './no-poster.module.css'

export const NoPoster = () => {
const posterImg = pickRandPick();
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Постер отсутствует</p>
            <img className={styles.image} src={posterImg} alt='Изображение людей перед пустым экраном телевизора'/>
        </div>
    )
}
import { removeSlot } from "services/roulette-model";
import { useAppDispatch, useAppSelector } from "services/store"
import { garbageIcon } from "utils/utils";
import styles from './list.module.css'

export const List = () => {
    const dataArr = useAppSelector(state => state.roulette.dataArr);
    const dispatch = useAppDispatch();

    const handleClick = (film: string) => {
        dispatch(removeSlot(film))
    }
    return (
        <ul className={styles.wrapper}>
            {dataArr.map(title => {
                return(<li key={title}>
                    <div className={styles.film}>
                        {title}
                        <img className={styles.logo} onClick={() => handleClick(title)} src={garbageIcon} alt='иконка удаления'/>
                    </div>
                </li>)
            })}            
        </ul>
    )
}
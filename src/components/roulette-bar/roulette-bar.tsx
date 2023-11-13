import { garbageIcon, pencilIcon, pointPic, randomSpin } from "utils/utils"
import styles from './roulette-bar.module.css'
import { Button } from "ui/button/button"
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "services/store"
import commonStyles from '../../ui/common/common.module.css'
import { clearData } from "services/roulette-model"

export const RouletteBar = () => {
    const data = useAppSelector(state => state.roulette.dataArr);
    const dispatch = useAppDispatch();
    const [hasWinner, setWinner ] = useState(false);
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
      }))
    const spinHandler = () => {
        setWinner(false);
        api.start({
          from: {
            x: 0,
          },
          to: {
            x: -randomSpin(data)*150-75,
          },
        });
        setTimeout(() => setWinner(true), 1000);
    }

    const boxColor = (title: string) =>{
        if(data.length % 2) {
            return data.indexOf(title) % 2 ? `${styles.item} ${styles.accentItem}` : `${styles.item}`
        }
        return data.indexOf(title) % 2 ? `${styles.item}` : `${styles.item} ${styles.accentItem}`
    }

    const redactHandle = () => {

    }

    const clearHandle = () => {
        dispatch(clearData())
    }

    useEffect(()=> {
        if(data.length < 4) {
            setWinner(false);
            api.start({
                from: {
                    x: 0,
                },
                to: {
                    x: 0,
                },
            });
        };
    },[data.length]);

    return(
        data.length ? <div className={styles.wrapper}>
            <div id='container' className={styles.container}>
                <img className={styles.pic} src={pointPic} alt="указатель рулетки"/>
                <div id='list' className={styles.list}>
                    <div className={hasWinner ? `${styles.pickedItem} ${styles.pickedVisible}` : `${styles.pickedItem}`}></div>
                    {data.map((title) => {
                        return (
                            <animated.div 
                            className={data.indexOf(title) % 2 ? `${styles.item}` : `${styles.item} ${styles.accentItem}`}
                            key={data.indexOf(title)}
                            id={`${data.indexOf(title)}`}
                            style={{
                                ...springs,
                            }}>
                                {title}
                            </animated.div>
                            )
                    })}
                    {data.length > 3 && data.map((title) => {
                        return (
                            <animated.div 
                            className={boxColor(title)}
                            key={data.indexOf(title)}
                            id={`${data.indexOf(title)}`}
                            style={{
                                ...springs,
                            }}>
                                {title}
                            </animated.div>
                            )
                    })}
                </div>
            </div>
            <div className={styles.toolbar}>
                <div onClick={redactHandle} className={styles.tool}>Редактировать
                    <img className={styles.toolIcon} src={pencilIcon} alt='иконка редактирования'/>
                </div>
                <div onClick={clearHandle} className={styles.tool}>Очистить
                    <img className={styles.toolIcon} src={garbageIcon} alt='иконка мусорной корзины'/>
                </div>
            </div>
            <Button onClick={spinHandler} disabled={data.length < 4 ? true : false} text={data.length < 4 ? "Мйнймум 4 варйанта" : "Крутйть"}/>
        </div>
        : <h3 className={commonStyles.text}>Найди и добавь варианты в рулетку, или введи название фильма вручную</h3>
    )
}
import { pointPic, randomSpin } from "utils/utils"
import styles from './roulette-bar.module.css'
import { Button } from "ui/button/button"
import { createRef, useEffect, useState } from "react"

const data = [
'Batman',
'The Thing',
'King Speaks',
'Titanic',
'Moon 2112'
]

// export const spinHandler = (data) => {
//     const move = -150 * 15;
//     const item = (id) => document.getElementById(id);
//     const items = (className) => document.querySelectorAll(className);

//     if(item('list') && item('container') && items('.item')) { 
//     item('list').style.left = move + 'px';
//     //const index = -Math.floor((move + (item('container').offsetWidth / 2) / -150 ) / 150) + 1;
//     const index = randomSpin(data);
//     //items('.item')[index].style.background = 'red'; 
//     //return data[randomSpin(data)]
//     console.log(index);
//     }
// }
export const RouletteBar = () => {
    const [ winner, setWinner ] = useState<number | null>(null);
    const [ refContainer, setRefContainer ] = useState<HTMLDivElement | null>(null);
    const spinZone = createRef<HTMLDivElement>();
    const spinList = createRef<HTMLUListElement>();
    const winnerRef = createRef<any>();
    const ordinaryRef = createRef<HTMLObjectElement>();

    useEffect(()=>{
        const roulette = spinZone.current;
        setRefContainer(roulette)
        console.log(roulette);
    },[]);

    const spinHandler = async() => {
        const picked = randomSpin(data);
        await setWinner(picked);
        const move = -150 * 15;
        if(refContainer) {refContainer.setAttribute('style', `left: ${move}px`)} 
        
    }
    
    return(
        <div className={styles.wrapper}>
            <div ref={spinZone} id='container' className={styles.container}>
                <img className={styles.pic} src={pointPic} alt="указатель рулетки"/>
                <ul ref={spinList} id='list' className={styles.list}>
                    {data.map((title) => {
                        return (
                            <li 
                            ref={data.indexOf(title) === winner ? winnerRef : ordinaryRef}
                            className={data.indexOf(title) % 2 ? `${styles.item} ${styles.accentItem}` : `${styles.item}`}
                            key={data.indexOf(title)}
                            id={`${data.indexOf(title)}`}>
                                {title}
                            </li>)
                    })}
                </ul>
            </div>
            <Button onClick={spinHandler} text="Крутйть"/>
        </div>
    )
}
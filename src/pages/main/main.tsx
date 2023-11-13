import styles from './main.module.css'
import { backVid } from "utils/utils";
import { Header } from "components/header/header";
import { Link } from "react-router-dom";

export const Main = () => {

    return (
        <>
        <div className={styles.background}>
            <video src={backVid} className={styles.backgroundVideo} autoPlay muted loop/>
        </div>
        <Header/>
        <section className={styles.wrapper}>
            <h1 className={styles.mainText}>Даваи что-нйбудь посмотрйм</h1>
            <div className={styles.buttonZone}>
                <Link className={styles.linkText} to='/roulette'><p>Cлучаиный выбор</p></Link>
                {/* <Link className={styles.linkText} to='/filter'><p>Фйльтр</p></Link> */}
                <Link className={styles.linkText} to='/my-roulette'><p>Создать рулетку</p></Link>
            </div>
        </section>
        </>
    )
}
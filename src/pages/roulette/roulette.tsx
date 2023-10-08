import styles from './rouletee.module.css';
import { getRandom } from "api/api";
import { FilmCard } from "components/film-card/film-card";
import { Loader } from "components/loader/loader";
import { useState } from "react";
import { Button } from "ui/button/button"

export const Roulette = () => {
    const [film, setFilm] = useState<any|null>(null);
    const [loader, setLoader] = useState<boolean>(false);

    const moviePicker = async():Promise<any> => {
        let res = await getRandom();
        if (res.Error === "Incorrect IMDb ID.") { return moviePicker() }
        setFilm(res);
        setLoader(false);
        return res;
    }

    const onClick = async() => {
        setLoader(true);
        await moviePicker();
    }

    return (
        <section className={styles.wrapper}>
            <Button 
                text='Мне повезет'
                size='default'
                theme='teal'
                onClick={onClick} />
            {loader ? <Loader/>
            : film && <FilmCard
                data={film} />}
        </section>
    )
}
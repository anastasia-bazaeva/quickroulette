import { Button } from "ui/button/button";
import styles from './main.module.css'
import { getRandom } from "api/api";
import { useEffect, useState } from "react";
import { FilmCard } from "components/film-card/film-card";
import { backVid } from "utils/utils";
import { Header } from "components/header/header";
import { Loader } from "components/loader/loader";
import { Link } from "react-router-dom";

const mockFilm = {
    "Title": "Episode #1.4006",
    "Year": "2002",
    "Rated": "TV-G",
    "Released": "20 May 2002",
    "Season": "1",
    "Episode": "4006",
    "Runtime": "22 min",
    "Genre": "Drama",
    "Director": "Richard Sarell",
    "Writer": "N/A",
    "Actors": "Dan Paris, Kym Valentine, Noah Sutherland, Shane Connor",
    "Plot": "N/A",
    "Language": "English",
    "Country": "Australia",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3ODUzOTM3M15BMl5BanBnXkFtZTcwMTk4MTYxMQ@@._V1_SX300.jpg",
    "Ratings": [],
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt1609658",
    "seriesID": "tt0088580",
    "Type": "episode",
    "Response": "True"
}

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
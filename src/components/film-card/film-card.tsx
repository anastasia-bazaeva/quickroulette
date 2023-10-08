import { Link } from 'react-router-dom'
import styles from './film-card.module.css'
import commonStyles from '../../ui/common/common.module.css'
import { NoPoster } from 'ui/no-poster/no-poster'

export const FilmCard = ({ data }:any) => {
    const { Title, Year, Genre, Poster, Plot, imdbID } = data;
    return(
        <>{Title ?
            <div className={styles.cardWindow}>
                <h2>{Title}</h2>
                <h3>{Year}</h3>
                <h2>{Genre}</h2>
                {Poster === "N/A" ? <NoPoster /> : <img className={styles.image} src={Poster} alt='афиша фильма'/>}
                <p>{Plot}</p>
                <Link className={commonStyles.link} target={"_blank"} to={`https://www.imdb.com/title/${imdbID}/`}>
                    <p>Перейти на страницу фильма на IMDB</p></Link>
            </div>
            : <div> Ничего не нашлось, попробуй еще разок.</div>}
        </>
    )
}
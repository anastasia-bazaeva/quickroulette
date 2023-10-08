import { NoPoster } from 'ui/no-poster/no-poster';
import styles from './search-card.module.css'

type SearchCardType = {
    film: {
        Title: string,
        Year: string,
        Poster: string,
    }
}

export const SearchCard = ({film}:SearchCardType) => {
    const { Title, Year, Poster } = film;
    return (
        <div className={styles.cardWindow}>
                <h2 className={styles.text}>{Title}</h2>
                <h3>{Year}</h3>
                {Poster === "N/A" ? <NoPoster /> : <img className={styles.image} src={Poster} alt='афиша фильма'/>}
        </div>
        )
}
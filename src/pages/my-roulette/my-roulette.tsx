import styles from './my-roulette.module.css'
import commonStyles from '../../ui/common/common.module.css'
import { SearchField } from 'ui/search-field/search-field'
import { useState } from 'react'
import { SubmitButton } from 'ui/button/submit-button'
import { useGetBySearchNameQuery } from 'services/film-api'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { FilmCard } from 'components/film-card/film-card'
import { useAppDispatch, useAppSelector } from 'services/store'
import { clearSearch, setSearch } from 'services/roulette-model'
import { Button } from 'ui/button/button'
import { SearchCard } from 'components/search-card/search-card'

export const MyRoulette = () => {
    const [value, setValue] = useState(null);
    const [customValue, setCustomValue] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const { data, isSuccess, refetch } = useGetBySearchNameQuery(searchValue ?? skipToken);
    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        e.preventDefault();
        setValue(e.target.value);

    }
    const handleClick = async(e: any) => {
        e.preventDefault();
        setSearchValue(value);
        setValue(null);
    }
    const handleCustomChange = (e: any) => {
        e.preventDefault();
        setCustomValue(e.target.customValue);
    }
    const handleCustomClick = (e: any) => {
        e.preventDefault();
        console.log('click');
        setCustomValue(null);
    }
    const handleAddButtonClick = (film: any) => {
        console.log(film);
    }
    
    return(
        <section className={styles.wrapper}>
            <h3 className={commonStyles.text}>Найди и добавь варианты в рулетку, или введи название фильма вручную</h3>
            <div className={styles.fieldsWrapper}>
                <form className={styles.searchBar}>
                    <SearchField 
                    isDisabled={false}
                    value={value ?? ''}
                    onChange={(e) => handleChange(e)}
                    />
                    <SubmitButton 
                    onClick={handleClick}
                    theme='teal'
                    text='Наитй'
                    />
                </form>
                <form className={styles.searchBar}>
                    <SearchField 
                    isDisabled={false}
                    value={customValue ?? ''}
                    onChange={(e) => handleCustomChange(e)}
                    />
                    <SubmitButton 
                    onClick={handleCustomClick}
                    theme='teal'
                    text='Свои варйант'
                    />
                </form>
            </div>
            <ul className={styles.searchList}>
                {data?.Search && data.Search.map((film: any)=> {
                    return (
                        <li className={styles.searchItem} key={film.index}>
                            <SearchCard 
                            film={film}/>
                            <Button 
                            text='Добавйть'
                            onClick={() => handleAddButtonClick(film)} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
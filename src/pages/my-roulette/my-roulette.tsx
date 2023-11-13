import styles from './my-roulette.module.css'
import { SearchField } from 'ui/search-field/search-field'
import { useState } from 'react'
import { SubmitButton } from 'ui/button/submit-button'
import { useGetBySearchNameQuery } from 'services/film-api'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { useAppDispatch, useAppSelector } from 'services/store'
import { addSlot, removeSlot } from 'services/roulette-model'
import { Button } from 'ui/button/button'
import { SearchCard } from 'components/search-card/search-card'
import { RouletteBar } from 'components/roulette-bar/roulette-bar'

export const MyRoulette = () => {
    const [value, setValue] = useState(null);
    const [myValue, setMyValue] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const { data, error } = useGetBySearchNameQuery(searchValue ?? skipToken);
    const dispatch = useAppDispatch();
    const rouletteData = useAppSelector(state => state.roulette.dataArr);

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
        setMyValue(e.target.value);
    }
    const handleCustomClick = (e: any) => {
        e.preventDefault();
        if(rouletteData.find(element => element === myValue)) {
            dispatch(removeSlot(myValue))
        } else {
            dispatch(addSlot(myValue))
        }
        setMyValue(null);
    }
    const handleAddButtonClick = (film: any) => {
        if(rouletteData.find(element => element === film.Title)) {
            dispatch(removeSlot(film.Title))
        } else {
            dispatch(addSlot(film.Title))
        }
    }
    
    return(
        <section className={styles.wrapper}>
            <RouletteBar />
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
                    disabled={value ? false : true}
                    />
                </form>
                <form className={styles.searchBar}>
                    <SearchField 
                    isDisabled={false}
                    value={myValue ?? ''}
                    onChange={(e) => handleCustomChange(e)}
                    />
                    <SubmitButton 
                    onClick={handleCustomClick}
                    theme='teal'
                    text='Ввестй свои варйант'
                    disabled={myValue ? false : true}
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
                            text={rouletteData.find(element => element === film.Title) ? 'Удалйть' : 'Добавйть'}
                            onClick={() => handleAddButtonClick(film)} />
                        </li>
                    )
                })}
            </ul>
            {error && <h3>Попробуй еще раз</h3>}
        </section>
    )
}
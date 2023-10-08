import { ChangeEvent, useState } from "react";
import { Input } from "ui/input/input";
import styles from './filter.module.css';
import { Select } from "ui/select/select";
import { yearsOptions } from "utils/utils";
import { SubmitButton } from "ui/button/submit-button";
import { FilmType, Params, useGetAllByFilterQuery } from "services/film-api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FilmCard } from "components/film-card/film-card";
import { Loader } from "components/loader/loader";

export const Filter = () => {
    const [value, setValue] = useState<FilmType>('movie');
    const [valueFrom, setValueFrom] = useState(2023);
    const [valueTo, setValueTo] = useState(2023);
    const [params, setParams] = useState<Params|null>(null)
    const { data, isLoading, refetch } = useGetAllByFilterQuery(params ?? skipToken )

    const handleTypeChange = (e: any) => {
        setValue(e.target.value);
      };
    const handleValueFromChange = (e: any) => {
        setValueFrom(e.target.value);
      }
    const handleValueToChange = (e: any) => {
        setValueTo(e.target.value);
      }

    const handleClick = (e: SubmitEvent) => {
        e.preventDefault();
        setParams({
            from: valueFrom,
            to: valueTo,
            type: value,
        });
        // console.log(data)
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.inputZone}>
                <div className={styles.inputWrapper}>
                    <div className={styles.radioBar}>
                        <Input 
                        label='Фильм'
                        onChange={(e) => handleTypeChange(e)}
                        checked={value === 'movie' ? true : false}
                        value='movie'
                        />
                        <Input 
                        label='Сериал'
                        onChange={(e) => handleTypeChange(e)}
                        checked={value === 'series' ? true : false}
                        value='series'
                        />
                        <Input 
                        label='Эпизод'
                        onChange={(e) => handleTypeChange(e)}
                        checked={value === 'episode' ? true : false}
                        value='episode'/>
                    </div>
                    <div className={styles.selectBar}>
                        <p className={styles.barText}>Год выпуска</p>
                        <div className={styles.selectedZone}>
                            <p className={styles.barText}>с </p>
                            <Select 
                            options={yearsOptions}
                            onChange={handleValueFromChange}
                            value={valueFrom}
                            />
                            <p className={styles.barText}>по </p>
                            <Select
                            options={yearsOptions}
                            onChange={handleValueToChange}
                            value={valueTo}
                            />
                        </div>
                    </div>
                </div>
                <SubmitButton 
                text='Мне повезет'
                size='default'
                theme='teal'
                onClick={(e:SubmitEvent) => handleClick(e)} />
            </form>
            {isLoading ? <Loader/>
            : data?.Search && <FilmCard
                data={data.Search[0]} />}
        </section>
    )
}
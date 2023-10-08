import styles from './select.module.css'

export type SelectOptions = {
    options: Array<number>,
    value: number,
    onChange: (e:any) => void
}

export const Select = ({ options, value, onChange }:SelectOptions) => {
    return (
        <div className={styles.select}>
            <select value={value} onChange={onChange}>
                {options.map((year) => {
                    return(
                        <option
                        className={styles.selectInput}
                        key={year}
                        value={year}>{year}</option>
                    )
                })}
            </select>
        </div>
    )
}
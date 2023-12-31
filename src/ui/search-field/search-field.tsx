import styles from './search-field.module.css'

type SearchFieldTypes = {
    isDisabled: boolean,
    value: string,
    onChange: (e:any) => void
}

export const SearchField = ({isDisabled, value, onChange}:SearchFieldTypes) => {
    
    return (
        <input className={styles.field} 
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        type='text'
        placeholder="Введи название фильма"
        maxLength={50}></input>
    )
}
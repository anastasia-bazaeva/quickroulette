import { ChangeEvent } from "react"
import styles from './input.module.css'

type InputType = {
    label: string,
    value: string,
    onChange: (e:any) => void,
    checked: boolean
}

export const Input = ({ label, value, onChange, checked }: InputType) => {
    return(
        <>
            <input 
                className={styles.checkbox}
                type='checkbox'
                id={value}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e)}></input>
            <label htmlFor={value}>
                {label}
            </label>
        </>
    )
}
import styles from './button.module.css'

type ButtonProps ={
    text: string;
    size?: string;
    theme?: string;
    disabled?: boolean;
    onClick: (e: any) => void
}

export const SubmitButton = ({ text, size = 'default', theme = 'default', onClick, disabled }: ButtonProps) => {
    
    const colorClass = () => {
        if(theme === 'pale') return styles.pale;
        if(theme === 'teal') return styles.teal;
        return styles.default;
    }
    const style = colorClass();

    const className = `${styles.button} ${style}`;
    return (
        <button onClick={(e) => onClick(e)} className={className} disabled={disabled}>{text}</button>
    )
}
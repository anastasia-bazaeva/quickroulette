import styles from './button.module.css'

type ButtonProps ={
    text: string;
    size?: string;
    theme?: string;
    onClick?: () => void
}

export const Button = ({ text, size = 'default', theme = 'default', onClick }: ButtonProps) => {
    
    const colorClass = () => {
        if(theme === 'pale') return styles.pale;
        if(theme === 'teal') return styles.teal;
        return styles.default;
    }
    const style = colorClass();

    const className = `${styles.button} ${style}`;
    return (
        <button onClick={onClick} className={className}>{text}</button>
    )
}
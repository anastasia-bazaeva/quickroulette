import styles from './modal-overlay.module.css';

interface IModalOverlay {
    onClick: () => void
}

const ModalOverlay = ({ onClick }:IModalOverlay) => {
    return (
        <div className={styles.overlay} onClick={onClick}></div>
    )
}
export default ModalOverlay
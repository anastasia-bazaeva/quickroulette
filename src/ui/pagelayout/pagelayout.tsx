import { ReactNode } from "react";
import styles from './pagelayout.module.css';

interface PageLayoutProps {
    content?: ReactNode;
  }

export const PageLayout = ({ content }: PageLayoutProps) => {
    return (
        <div className={styles.content}> {content} </div>
    )
}
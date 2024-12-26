import styles from "./styles.module.scss";

interface TitleProps {
  title: string;
}

export default function Title({title }: TitleProps) {
  return (
    <>
       <p className={styles.sectionTitle}>{title}</p>
    </>
  );
}

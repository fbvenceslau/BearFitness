import styles from "./styles.module.scss";
import { Button } from "reactstrap";

interface BuyButtonProps {
  link: string;
  text: string;
}

export default function BuyButton({ link, text }: BuyButtonProps) {
  return (
    <>
      <a href={link} target="_blank" rel="external">
        <Button  outline className={styles.button}>
          {text}
        </Button>
      </a>
    </>
  );
}

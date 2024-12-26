import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "reactstrap";

interface CustomButtonProps {
  link: string;
  text: string;
}

export default function CustomButton({ link, text }: CustomButtonProps) {
  return (
    <>
      <Link href={link}>
        <Button outline className={styles.button}>
          {text}
        </Button>
      </Link>
    </>
  );
}

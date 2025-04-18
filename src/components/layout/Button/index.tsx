import Image from "next/image";
import styles from "./styles/styles.module.css";
import { roboto } from "@/app/fonts";

const Button = ({
  content,
  url,
  onlyIcon = false,
}: {
  content?: string;
  url?: string;
  onlyIcon?: boolean;
}) => {
  return (
    <a href={url} className={`${roboto.className} ${styles.button}`}>
      {!onlyIcon && content}
      <div className={styles.contentImage}>
        <Image fill src={"/button.png"} alt="button" />
      </div>
    </a>
  );
};

export default Button;

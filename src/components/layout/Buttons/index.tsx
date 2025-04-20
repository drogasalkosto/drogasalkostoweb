import Image from "next/image";
import styles from "./styles/styles.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

interface buttonProps {
  text: string;
  url: string;
}

export const ButtonFilled = ({ text, url }: buttonProps) => {
  return (
    <a href={url} className={`${styles.buttonFilled} ${styles.button}`}>
      <div className={styles.wraperIcon}>
        <IoLogoWhatsapp />
      </div>
      {text}
      <div className={styles.wraperImage}>
        {" "}
        <div className={styles.containerImage}>
          <Image
            src={"/button.png"}
            alt="buttonFilled"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </a>
  );
};

export const ButtonOutlined = ({ text, url }: buttonProps) => {
  return (
    <a href={url} className={`${styles.buttonOutlined} ${styles.button}`}>
      <div className={styles.wraperIcon}>
        <FaPhone />
      </div>
      {text}
      <div className={styles.wraperImageOutlined}>
        {" "}
        <div className={styles.containerImage}>
          <Image
            src={"/button.png"}
            alt="buttonFilled"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </a>
  );
};

export const ButtonTonal = () => {
  return <button></button>;
};

export const ButtonElevated = () => {
  return <button></button>;
};

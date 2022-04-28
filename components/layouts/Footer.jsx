import styles from "./Footer.module.css";
import footerConfig from "../../config/footer.json";

const Footer = () => {
  const { footerStyle } = styles;
  const { copyRightText, backgroundColor } = footerConfig;
  return (
    <footer>
      <div
        className={`container-fluid text-center ${footerStyle} bg-${backgroundColor}`}
      >
        <span className="text-center font-weight-light">
          &copy;{copyRightText}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div>
        <ul className={styles.social_List}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        <p>Nosso rodapé</p>
        </div>
    )
}
export default Footer
//import classNames from 'classnames/bind';
//import styles from './Contact.module.scss';
//const cx = classNames.bind(styles);
import { useParams } from 'react-router-dom';
function Contact() {
    let params = useParams();
    console.log(params['*']); // "one/two"
    return <h3>Content</h3>;
}

export default Contact;

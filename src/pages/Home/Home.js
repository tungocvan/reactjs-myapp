import Cvprofile from '~/components/Cvprofile';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
//import { useStore } from "~/store";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Cvprofile />
        </div>
    );
}

export default Home;

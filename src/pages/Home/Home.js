import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
//import { useStore } from "~/store";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/bmct">
                <button className="btn btn-primary btn-lg me-1 mb-1" type="button">
                    THỦ TỤC HÀNH CHÍNH
                </button>
            </Link>
        </div>
    );
}

export default Home;

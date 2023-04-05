import classNames from 'classnames/bind';
import styles from './Profiles.module.scss';
const cx = classNames.bind(styles);
function Profiles() {
    return (
        <div className={cx('wrapper')}>
            <h3>Profiles PAGE</h3>
        </div>
    );
}

export default Profiles;

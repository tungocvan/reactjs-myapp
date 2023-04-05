import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
const cx = classNames.bind(styles);
function Settings() {
    return (
        <div className={cx('wrapper')}>
            <h3>Settings PAGE</h3>
        </div>
    );
}

export default Settings;

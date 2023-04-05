import classNames from 'classnames/bind';
import styles from './Language.module.scss';
const cx = classNames.bind(styles);
function Language() {
    return (
        <div className={cx('wrapper')}>
            <h3>Language PAGE</h3>
        </div>
    );
}

export default Language;

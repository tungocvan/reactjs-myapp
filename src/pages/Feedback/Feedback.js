import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
const cx = classNames.bind(styles);
function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <h3>Feedback PAGE</h3>
        </div>
    );
}

export default Feedback;

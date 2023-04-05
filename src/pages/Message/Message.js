import classNames from 'classnames/bind';
import styles from './Message.module.scss';
const cx = classNames.bind(styles);
function Message() {
    return (
        <div className={cx('wrapper')}>
            <h3>Message PAGE</h3>
        </div>
    );
}

export default Message;

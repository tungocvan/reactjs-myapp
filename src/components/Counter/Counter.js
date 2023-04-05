import Button from '~/components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '~/redux/slice/counterSlice';
//import classNames from 'classnames/bind';
//import styles from './Counter.module.scss';

//const cx = classNames.bind(styles);

function Counter() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const hanlderIncrease = () => {
        dispatch(increase());
    };
    const hanlderDecrease = () => {
        dispatch(decrease());
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>{count}</p>
            <hr />
            <div>
                <Button onClick={hanlderIncrease} primary>
                    Tăng
                </Button>
                <Button onClick={hanlderDecrease} primary>
                    Giảm
                </Button>
            </div>
        </div>
    );
}

export default Counter;

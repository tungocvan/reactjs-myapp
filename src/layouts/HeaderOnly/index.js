import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    
    return (
        <div>
            <Header />
            <div className={cx("container")}> 
                <Sidebar />  
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;

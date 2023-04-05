import classNames from 'classnames/bind';
import styles from './MenuNav.module.scss';

const cx = classNames.bind(styles);

function MenuNav({onClickMenu}) {
    
    return (
        <div className={cx("sidebar","show-sidebar")}>
            <div className={cx("sidebar-header")}>
                <img className={cx("logo")} src="./logo.svg" alt="logo" />
                <i className={cx("fa fa-times","show-sidebar")} aria-hidden="true" onClick={onClickMenu} />
            </div>
            <ul className={cx("menu")}>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Contact</a>
                </li>
            </ul>
        </div>
          
    );
}



export default MenuNav;

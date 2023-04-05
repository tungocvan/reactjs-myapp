import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import './styles.css';
import { slugify } from '~/utils/functions';
// https://iconscout.com/unicons/explore/line
const cx = classNames.bind(styles);
const navMenu = [
    {
        title: 'Home',
        iconClass: 'uil uil-home',
        to: '#',
        subMenu: [
            { title: 'E commerce', to: '/inbox', iconClass: 'uil uil-left-arrow-to-left fs-0' },
            { title: 'E commerce-1', to: '/inbox' },
        ],
    },
    {
        title: 'Home 2',
        iconClass: 'uil uil-setting',
        to: '#',
        subMenu: [
            { title: 'E commerce 2', to: '/inbox', iconClass: 'uil uil-left-arrow-to-left fs-0' },
            { title: 'E commerce-2', to: '/inbox' },
        ],
    },
];

const ItemMenu = ({ itemMenu }) => {
    //console.log('itemMenu:', itemMenu);
    return (
        <li className="nav-item">
            {/* parent pages*/}
            <div className={cx('nav-item') + ' nav-item-wrapper'}>
                <Link
                    className="nav-link dropdown-indicator label-1 collapsed"
                    to={'#' + slugify(itemMenu.title)}
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="home"
                >
                    <div className="d-flex align-items-center">
                        <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                        </div>
                        <span className="nav-link-icon">
                            <i className={itemMenu.iconClass}></i>
                        </span>
                        <span className="nav-link-text">{itemMenu.title}</span>
                    </div>
                </Link>
                {itemMenu.subMenu.length > 0 && (
                    <SubMenu subMenu={itemMenu.subMenu} idTitle={slugify(itemMenu.title)} />
                )}
            </div>
        </li>
    );
};

const SubMenu = ({ subMenu, idTitle }) => {
    //console.log('subMenu:', subMenu);
    return (
        <div className="parent-wrapper label-1">
            <ul className="nav parent collapse" data-bs-parent="#navbarVerticalCollapse" id={idTitle} style={{}}>
                <li className="collapsed-nav-item-title d-none">{idTitle}</li>
                {subMenu.map((item, idx) => {
                    return (
                        <li className="nav-item" key={idx}>
                            <Link className="nav-link" to={item.to} data-bs-toggle="" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-text">{item.title}</span>
                                </div>
                            </Link>
                            {/* more inner pages*/}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

function Menu() {
    return (
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
            {/* scrollbar removed*/}
            <div className="navbar-vertical-content">
                <ul className="navbar-nav flex-column" id="navbarVerticalNav">
                    {navMenu.length > 0 &&
                        navMenu.map((itemMenu, index) => {
                            return <ItemMenu key={index} itemMenu={itemMenu} />;
                        })}
                </ul>
            </div>
        </div>
    );
}

export default Menu;

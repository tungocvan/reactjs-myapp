import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
const cx = classNames.bind(styles);

function Sidebar({ children }) {
    const main = useRef();
    const footerRight = useRef();
    const navLink = useRef();
    useEffect(() => {
        main.current = document.querySelector('main');
        navLink.current = document.querySelectorAll('.nav-link');
    }, []);

    const hanlderThunho = () => {
        main.current.classList.toggle('navbar-vertical-collapsed');
        footerRight.current.classList.toggle('footer-border-right');
        navLink.current.forEach((item) => {
            //item.style.paddingLeft = 0;
            item.classList.toggle('nav-link-0');
        });
    };

    return (
        <nav className="navbar navbar-vertical navbar-expand-lg ">
            <Menu />
            <div ref={footerRight} className="navbar-vertical-footer">
                <button
                    className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
                    id="thunho"
                    onClick={hanlderThunho}
                >
                    <span className="uil uil-left-arrow-to-left fs-0" />
                    <span className="uil uil-arrow-from-right fs-0" />
                    <span className="navbar-vertical-footer-text ms-2">Thu nhỏ</span>
                </button>
            </div>
        </nav>
    );
}

export default Sidebar;

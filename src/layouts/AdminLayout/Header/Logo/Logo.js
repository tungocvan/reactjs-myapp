import { Link } from 'react-router-dom';
//import classNames from 'classnames/bind';
//import styles from './Logo.module.scss';

//const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className="navbar-logo">
            <button
                className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarVerticalCollapse"
                aria-controls="navbarVerticalCollapse"
                aria-expanded="false"
                aria-label="Toggle Navigation"
            >
                <span className="navbar-toggle-icon">
                    <span className="toggle-line" />
                </span>
            </button>
            <Link className="navbar-brand me-1 me-sm-3" to="/">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <img src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
                        <p className="logo-text ms-2 d-none d-sm-block">HAMADA</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Logo;

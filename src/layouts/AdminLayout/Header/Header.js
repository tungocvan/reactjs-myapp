import { Link } from 'react-router-dom';
//import classNames from 'classnames/bind';
//import styles from './Header.module.scss';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import { useUserAuth } from '~/context/userAuthContext';
//const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(true);
    const { user } = useUserAuth();
    useEffect(() => {
        if (user === null || Object.keys(user).length === 0) {
            setShow(false);
        }
    }, [user]);
    return (
        <nav className="navbar navbar-top navbar-expand">
            {/* navbar top content goes here*/}
            <div className="collapse navbar-collapse justify-content-between">
                {/* Logo */}
                <Logo />
                {/* Search */}
                {!show && <Search />}
                {/* Account */}
                {(show && <Account />) || (
                    <Link to="/signin" className="btn btn-primary btn-lg me-1 mb-1">
                        Đăng nhập
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;

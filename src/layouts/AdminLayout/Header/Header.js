//import { Link } from 'react-router-dom';
//import classNames from 'classnames/bind';
//import styles from './Header.module.scss';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
//const cx = classNames.bind(styles);

function Header() {
    return (
        <nav className="navbar navbar-top navbar-expand">
            {/* navbar top content goes here*/}
            <div className="collapse navbar-collapse justify-content-between">
                {/* Logo */}
                <Logo />
                {/* Search */}
                <Search />
                {/* Account */}
                <Account />
            </div>
        </nav>
    );
}

export default Header;

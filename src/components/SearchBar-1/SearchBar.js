import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
    const [active,setActive] = useState(false)
    const handleClick = () => {
        setActive(!active);
    }
    return (
        <div className={cx("container")}>
            <div className={cx("search-bar-container", !active && "active" || "")}>
                <img
                src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
                alt="magnifier"
                className={cx("magnifier")}
                onClick={handleClick}
                />
                <input type="text" className={cx("input")} placeholder="Search ..." />
                <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
                alt="mic-icon"
                className={cx("mic-icon")}
                />
            </div>
        </div>
      
          
    );
}



export default SearchBar;

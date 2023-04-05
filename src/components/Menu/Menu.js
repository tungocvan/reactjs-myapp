import React from 'react';
//import classNames from 'classnames/bind';
//import styles from './Menu.module.scss';
import './styles.css';

//const cx = classNames.bind(styles);
const Menu = ({ items, activeMenu, handleMenuClick }) => {
    const renderMenuItem = (menuItem) => {
        const hasChildren = menuItem.children && menuItem.children.length > 0;
        const isActive = activeMenu === menuItem.id;

        return (
            <li key={menuItem.id} className={isActive ? 'active' : ''}>
                <a
                    href={menuItem.url}
                    onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(menuItem.id);
                    }}
                >
                    {menuItem.title}
                </a>
                {hasChildren && (
                    <ul>
                        {menuItem.children.map((child) => {
                            return renderMenuItem(child);
                        })}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <ul>
            {items.map((item) => {
                return renderMenuItem(item);
            })}
        </ul>
    );
};
export default Menu;

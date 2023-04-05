import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Đơn Xin Chuyển Trường"
                    to="/home"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đơn Xin Chuyển Lớp"
                    to="/post"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Đơn Xin Điều Chỉnh"
                    to="/product"
                    icon={<UserGroupIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="Đơn Xin Cấp lại"
                    to="/product"
                    icon={<UserGroupIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;

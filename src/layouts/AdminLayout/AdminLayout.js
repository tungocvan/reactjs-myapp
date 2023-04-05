//import { Link } from 'react-router-dom';
//import classNames from 'classnames/bind';
//import styles from './AdminLayout.module.scss';
import Sidebar from './Sidebar';
import Header from './Header';
//const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <main className="main">
            <div className="container-fluid px-0 " data-layout="container">
                <Sidebar />
                <Header />
                <div className="content">{children}</div>
            </div>
        </main>
    );
}

export default AdminLayout;

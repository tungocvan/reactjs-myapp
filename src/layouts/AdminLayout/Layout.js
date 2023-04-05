import Header from './Header';

function Layout({ children }) {
    return (
        <main className="main">
            <div className="container-fluid px-0 " data-layout="container">
                <Header />
                <div className="content">{children}</div>
            </div>
        </main>
    );
}

export default Layout;

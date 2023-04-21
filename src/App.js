import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { UserAuthContextProvider } from './context/userAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from '~/layouts/AdminLayout';
import Layout from '~/layouts/AdminLayout/Layout';

function App() {
    return (
        <UserAuthContextProvider>
            <Routes>
                {privateRoutes.map((route, index) => {
                    let Component = route.component;
                    let LayoutPrivate = Fragment;
                    if (route.layout === 'Layout') {
                        LayoutPrivate = Layout;
                    }
                    if (route.layout === 'AdminLayout') {
                        LayoutPrivate = AdminLayout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <LayoutPrivate>
                                    <ProtectedRoute>
                                        <Component />
                                    </ProtectedRoute>
                                </LayoutPrivate>
                            }
                        />
                    );
                })}

                {publicRoutes.map((route, index) => {
                    let Component = route.component;
                    let LayoutPublic = Fragment;
                    if (route.layout === 'AdminLayout') {
                        LayoutPublic = AdminLayout;
                    }
                    if (route.layout === 'Layout') {
                        LayoutPublic = Layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <LayoutPublic>
                                    <Component />
                                </LayoutPublic>
                            }
                        />
                    );
                })}
            </Routes>
        </UserAuthContextProvider>
    );
}

export default App;

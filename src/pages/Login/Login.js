<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '~/context/userAuthContext';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const { logIn, googleSignIn, user } = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            if (user.email === 'tungocvan@gmail.com' || user.email === 'chaule.lengoc@gmail.com') {
                navigate('/settings');
            } else {
                alert('Tài khoản của bạn không thể quản trị.');
                navigate('/logout');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (user === null || Object.keys(user).length === 0) {
            setShow(true);
        } else {
            console.log('user:', user.email);
            if (user.email === 'tungocvan@gmail.com' || user.email === 'chaule.lengoc@gmail.com') {
                navigate('/settings');
            } else {
                alert('Tài khoản của bạn không thể quản trị.');
                navigate('/logout');
            }
        }
    }, [user, navigate]);

    return (
        show && (
            <div className={cx('wrapper')}>
                <div className={cx('box') + ' p-4'}>
                    <h2 className="mb-3">Đăng nhập Tài khoản</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Địa chỉ email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="Submit">
                                Đằng nhập
                            </Button>
                        </div>
                    </Form>
                    <hr />
                    <div>
                        <GoogleButton className={cx('g-btn')} type="dark" onClick={handleGoogleSignIn} />
                    </div>
                </div>
                <div className={cx('box') + ' p-4 mt-3 text-center'}>
                    Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
                </div>
            </div>
        )
    );
};

export default Login;
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '~/context/userAuthContext';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const { logIn, googleSignIn, user } = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            if (user.email === 'tungocvan@gmail.com' || user.email === 'chaule.lengoc@gmail.com') {
                navigate('/settings');
            } else {
                alert('Tài khoản của bạn không thể quản trị.');
                navigate('/logout');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (user === null || Object.keys(user).length === 0) {
            setShow(true);
        } else {
            console.log('user:', user.email);
            if (user.email === 'tungocvan@gmail.com' || user.email === 'chaule.lengoc@gmail.com') {
                navigate('/settings');
            } else {
                alert('Tài khoản của bạn không thể quản trị.');
                navigate('/logout');
            }
        }
    }, [user, navigate]);

    return (
        show && (
            <div className={cx('wrapper')}>
                <div className={cx('box') + ' p-4'}>
                    <h2 className="mb-3">Đăng nhập Tài khoản</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Địa chỉ email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="Submit">
                                Đằng nhập
                            </Button>
                        </div>
                    </Form>
                    <hr />
                    <div>
                        <GoogleButton className={cx('g-btn')} type="dark" onClick={handleGoogleSignIn} />
                    </div>
                </div>
                <div className={cx('box') + ' p-4 mt-3 text-center'}>
                    Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
                </div>
            </div>
        )
    );
};

export default Login;
>>>>>>> f18a9e447ed57fb9dda93a50e78721933cc483e6

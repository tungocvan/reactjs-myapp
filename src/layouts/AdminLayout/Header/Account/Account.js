import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item dropdown">
                <Link
                    className="nav-link lh-1 pe-0"
                    id="navbarDropdownUser"
                    to="#!"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <div className={'avatar avatar-l ' + cx('avatar-user')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user text-700"
                            style={{ height: 20, width: 20 }}
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                    </div>
                </Link>
                <div
                    className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
                    aria-labelledby="navbarDropdownUser"
                >
                    <div className="card position-relative border-0">
                        <div className="card-body p-0">
                            <div className="text-center pt-4 pb-3">
                                <div className="avatar avatar-xl ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user text-700"
                                        style={{ height: 20, width: 20 }}
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <h6 className="mt-2 text-black">Từ Ngọc Vân</h6>
                            </div>
                            <div className="mb-3 mx-3">
                                <input
                                    className="form-control form-control-sm"
                                    id="statusUpdateInput"
                                    type="text"
                                    placeholder="Update your status"
                                />
                            </div>
                        </div>
                        <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                            <ul className="nav d-flex flex-column mb-2 pb-1">
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/settings">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-user me-2 text-900"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                        <span>Quản trị Hồ sơ</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-pie-chart me-2 text-900"
                                        >
                                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                                            <path d="M22 12A10 10 0 0 0 12 2v10z" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-lock me-2 text-900"
                                        >
                                            <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        Posts &amp; Activity
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-settings me-2 text-900"
                                        >
                                            <circle cx={12} cy={12} r={3} />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                        Settings &amp; Privacy{' '}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-help-circle me-2 text-900"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <line x1={12} y1={17} x2="12.01" y2={17} />
                                        </svg>
                                        Help Center
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-globe me-2 text-900"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={2} y1={12} x2={22} y2={12} />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        Language
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer p-0 border-top">
                            <ul className="nav d-flex flex-column my-3">
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="#!">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-user-plus me-2 text-900"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="8.5" cy={7} r={4} />
                                            <line x1={20} y1={8} x2={20} y2={14} />
                                            <line x1={23} y1={11} x2={17} y2={11} />
                                        </svg>
                                        Add another account
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                            <div className="px-3">
                                {' '}
                                <Link className="btn btn-phoenix-secondary d-flex flex-center w-100" to="/logout">
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-log-out me-2"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1={21} y1={12} x2={9} y2={12} />
                                    </svg>
                                    Sign out
                                </Link>
                            </div>
                            <div className="my-2 text-center fw-bold fs--2 text-600">
                                <Link className="text-600 me-1" to="#!">
                                    Privacy policy
                                </Link>

                                <Link className="text-600 mx-1" to="#!">
                                    Terms
                                </Link>

                                <Link className="text-600 ms-1" to="#!">
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default Account;

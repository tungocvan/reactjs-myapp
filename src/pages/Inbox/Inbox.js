import { useEffect, useState } from 'react';
//import classNames from 'classnames/bind';
//import styles from './Inbox.module.scss';

//const cx = classNames.bind(styles);

function UploadFile({ title, onFileChange }) {
    const idLabel = 'file-' + Math.floor(Math.random() * 10);
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={idLabel}>
                {title}
            </label>
            <input className="form-control" id={idLabel} type="file" onChange={onFileChange} />
        </div>
    );
}

function Inbox() {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    console.log('file:', file);
    return (
        <div className="d-flex container w-70">
            <div className="w-30">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <h4 className="card-title text-white">Hướng dẫn</h4>
                        <p className="card-text">Nhập thông tin liên hệ</p>
                        <p className="card-text">Tải biểu mẫu</p>
                        <p className="card-text">Nộp biểu mẫu</p>
                    </div>
                </div>
            </div>
            <div className="p-2 flex-grow-1 container ">
                <div className="card theme-wizard mb-5" data-theme-wizard="data-theme-wizard">
                    <div className="card-header bg-100 pt-3 pb-2 border-bottom-0">
                        <ul className="nav justify-content-between nav-wizard" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active fw-semi-bold"
                                    href="#bootstrap-wizard-tab1"
                                    data-bs-toggle="tab"
                                    data-wizard-step={1}
                                    aria-selected="true"
                                    role="tab"
                                >
                                    <div className="text-center d-inline-block">
                                        <span className="nav-item-circle-parent">
                                            <span className="nav-item-circle">
                                                <svg
                                                    className="svg-inline--fa fa-lock"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="lock"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                                                    />
                                                </svg>
                                                {/* <span class="fas fa-lock"></span> Font Awesome fontawesome.com */}
                                            </span>
                                        </span>
                                        <span className="d-none d-md-block mt-1 fs--1">Thông tin</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body pt-4 pb-0">
                        <div className="tab-content">
                            <div
                                className="tab-pane active"
                                role="tabpanel"
                                aria-labelledby="bootstrap-wizard-tab1"
                                id="bootstrap-wizard-tab1"
                            >
                                <form id="wizardForm1" noValidate="novalidate" data-wizard-form={1}>
                                    <div className="mb-2">
                                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">
                                            Họ và tên
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Họ và tên"
                                            id="bootstrap-wizard-wizard-name"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="bootstrap-wizard-wizard-email">
                                            Số điện thoại*
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            placeholder="Số điện thoại"
                                            id="bootstrap-wizard-wizard-email"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="bootstrap-wizard-wizard-email">
                                            Email*
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                                            id="bootstrap-wizard-wizard-email"
                                        />
                                    </div>
                                </form>
                                <UploadFile title="Đơn xin chuyển trường" onFileChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer border-top-0" data-wizard-footer="data-wizard-footer">
                        <div className="d-flex pager wizard list-inline mb-0">
                            <button
                                className="d-none btn btn-link ps-0"
                                type="button"
                                data-wizard-prev-btn="data-wizard-prev-btn"
                            >
                                <svg
                                    className="svg-inline--fa fa-chevron-left me-1"
                                    data-fa-transform="shrink-3"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-left"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                    style={{ transformOrigin: '0.3125em 0.5em' }}
                                >
                                    <g transform="translate(160 256)">
                                        <g transform="translate(0, 0)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                            <path
                                                fill="currentColor"
                                                d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                                                transform="translate(-160 -256)"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                {/* <span class="fas fa-chevron-left me-1" data-fa-transform="shrink-3"></span> Font Awesome fontawesome.com */}
                                Previous
                            </button>
                            <div className="flex-1 text-end">
                                <button
                                    className="btn btn-primary px-6 px-sm-6"
                                    type="submit"
                                    data-wizard-next-btn="data-wizard-next-btn"
                                >
                                    Next
                                    <svg
                                        className="svg-inline--fa fa-chevron-right ms-1"
                                        data-fa-transform="shrink-3"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="chevron-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        data-fa-i2svg=""
                                        style={{ transformOrigin: '0.3125em 0.5em' }}
                                    >
                                        <g transform="translate(160 256)">
                                            <g transform="translate(0, 0)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                                <path
                                                    fill="currentColor"
                                                    d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                                                    transform="translate(-160 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    {/* <span class="fas fa-chevron-right ms-1" data-fa-transform="shrink-3"> </span> Font Awesome fontawesome.com */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;

import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { GoogleSpreadsheet } from 'google-spreadsheet';
import { formattedDateTime } from '~/utils/functions';
//import classNames from 'classnames/bind';
//import styles from './Inbox.module.scss';

//const cx = classNames.bind(styles);

function UploadFile({ title, onFileChange, name }) {
    const idLabel = 'file-' + Math.floor(Math.random() * 10);
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={idLabel}>
                {title}
            </label>
            <input className="form-control" id={idLabel} type="file" onChange={onFileChange} name={name} />
        </div>
    );
}

function Inbox() {
    const [file, setFile] = useState();
    const [hoso, setHoso] = useState('');
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, filebieumau } = event.target;
        //console.log('hoso:', hoso);
        let dateTime = new Date();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('phone', phone.value);
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('date', formattedDateTime(dateTime));
        console.log('formData:', formData);
        fetch('https://app.tungocvan.app/api/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setHoso(data.data);
                name.value = '';
                email.value = '';
                phone.value = '';
                filebieumau.value = null;
            });
    };
    console.log('hoso:', hoso);

    const handleDownload = () => {
        const fileUrl = '/assets/bm/bm01.pdf';

        // Tạo một thẻ <a> ẩn, thiết lập thuộc tính href là đường dẫn tới file, và mô phỏng sự kiện click để kích hoạt việc tải xuống
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', '');
        link.click();
    };

    return (
        <>
            <div className="d-flex container">
                <div className="w-30 hide-inbox-sidebar">
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
                                    <button onClick={handleDownload} className="btn btn-primary me-1 mb-1">
                                        Click tải biểu mẫu
                                    </button>
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
                                    <form
                                        id="wizardForm1"
                                        noValidate="novalidate"
                                        data-wizard-form={1}
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                className="form-label text-900"
                                                htmlFor="bootstrap-wizard-wizard-name"
                                            >
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
                                                Email
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
                                        <UploadFile
                                            title="Đơn xin chuyển trường"
                                            onFileChange={handleFileChange}
                                            name="filebieumau"
                                        />
                                        <button type="submit" className="btn btn-outline-success me-1 mb-1">
                                            Nộp hồ sơ
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex container">
                <div className="w-30 hide-inbox-sidebar"></div>
                <div className="p-2 flex-grow-1 container ">
                    <div className="hide-inbox-sidebar">
                        {hoso && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{hoso.name}</td>
                                        <td>{hoso.phone}</td>
                                        <td>{hoso.email}</td>
                                        <td>Hồ sơ đã nộp</td>
                                        <td>Đang chờ duyệt</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inbox;

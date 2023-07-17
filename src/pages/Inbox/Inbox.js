import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import { Link } from 'react-router-dom';
//import { GoogleSpreadsheet } from 'google-spreadsheet';
import { formattedDateTime } from '~/utils/functions';
import classNames from 'classnames/bind';
import styles from './Inbox.module.scss';
import UploadFile from '~/components/UploadFile';

const cx = classNames.bind(styles);
const url = process.env.REACT_APP_URL_SERVER;
// function UploadFile({ title, onFileChange, name }) {
//     const idLabel = 'file-' + Math.floor(Math.random() * 10);
//     return (
//         <div className="mb-3">
//             <label className="form-label" htmlFor={idLabel}>
//                 {title}
//             </label>
//             <input className="form-control" id={idLabel} type="file" onChange={onFileChange} name={name} />
//         </div>
//     );
// }

function Inbox() {
    let params = useParams();

    const [file, setFile] = useState();
    const [hoso, setHoso] = useState('');
    const [bm, setBm] = useState('bm01');
    const [title, setTitle] = useState('Điều chỉnh thông tin học sinh');
    const [hosoCurrent, setHosoCurrent] = useState('');
    const [status, setStatus] = useState(true);
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
        setStatus(false);
        fetch(url + 'upload', {
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
                setStatus(true);
            });
    };
    //console.log('hoso:', hoso);

    const handleDownload = () => {
        const fileUrl = '/assets/bm/' + bm + '.pdf';

        // Tạo một thẻ <a> ẩn, thiết lập thuộc tính href là đường dẫn tới file, và mô phỏng sự kiện click để kích hoạt việc tải xuống
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', '');
        link.click();
    };

    const handleBieuMau = (bm) => {
        setBm(bm);
        switch (bm) {
            case 'bm01':
                setTitle('Điều chỉnh thông tin học sinh');
                break;
            case 'bm02':
                setTitle('Cấp lại bảng sao văn bằng');
                break;
            case 'bm03':
                setTitle('Chuyển đến trường trong nước');
                break;
            case 'bm04':
                setTitle('Chuyển đến trường ngoài nước');
                break;
            case 'bm05':
                setTitle('Chuyển lớp');
                break;
            case 'bm06':
                setTitle('Đơn xin miễn giảm học phí');
                break;
            case 'bm07':
                setTitle('Hồ sơ đề nghị miễn giảm học phí');
                break;
        }
        //console.log(bm);
    };

    useEffect(() => {
        if (params.phone) {
            //console.log(params.phone); // "one/two"
            fetch(url + 'tracuu/hoso/' + params?.phone, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setHosoCurrent(data);
                });
        }
    }, [params.phone]);

    return (
        (status && (
            <>
                <div className="d-flex container">
                    <div className="col-3 hide-inbox-sidebar">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <h4 className="card-title text-white">HÀNH CHÍNH CÔNG</h4>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm01"
                                    onClick={() => handleBieuMau('bm01')}
                                >
                                    <p>Điều chỉnh thông tin học sinh</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm02"
                                    onClick={() => handleBieuMau('bm02')}
                                >
                                    <p>Cấp lại bảng sao văn bằng</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm03"
                                    onClick={() => handleBieuMau('bm03')}
                                >
                                    <p>Chuyển đến trường trong nước</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm04"
                                    onClick={() => handleBieuMau('bm04')}
                                >
                                    <p>Chuyển đến trường ngoài nước</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm05"
                                    onClick={() => handleBieuMau('bm05')}
                                >
                                    <p>Chuyển lớp</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm06"
                                    onClick={() => handleBieuMau('bm06')}
                                >
                                    <p>Đơn xin miễn giảm học phí</p>
                                </Link>
                                <Link
                                    className="card-text text-white"
                                    to="/bmct/bm07"
                                    onClick={() => handleBieuMau('bm07')}
                                >
                                    <p>Hồ sơ đề nghị miễn giảm học phí</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex-grow-1 container ">
                        <div className="card theme-wizard mb-5" data-theme-wizard="data-theme-wizard">
                            <div className="card-header bg-100 pt-3 pb-2 border-bottom-0">
                                <h3 className="text-center p-2">{title}</h3>
                                <ul className="nav justify-content-between nav-wizard" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button onClick={handleDownload} className="btn btn-primary me-1 mb-1">
                                            1. Click tải biểu mẫu
                                        </button>
                                        <p className="btn btn-primary me-1 mb-1">
                                            2. Điền thông tin vào biểu mẫu đã tải về
                                        </p>
                                        <p className="btn btn-primary me-1 mb-1">3. Điền thông tin liên hệ</p>
                                        <p className="btn btn-primary me-1 mb-1">
                                            4. Chọn biểu mẫu đã điền vào chọn tệp
                                        </p>
                                        <p className="btn btn-primary me-1 mb-1">5. Nhấn nút nộp hồ sơ</p>
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
                                                title="Chọn biểu mẫu đã điền thông tin"
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
                        <div>
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
                        <div>
                            {hosoCurrent && (
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
                                            <td>{hosoCurrent.phone[0]?.name}</td>
                                            <td>{hosoCurrent.phone[0]?.phone}</td>
                                            <td>{hosoCurrent.phone[0]?.email}</td>
                                            <td>Hồ sơ đã nộp</td>
                                            <td>{hosoCurrent.phone[0]?.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )) || (
            <div className={cx('loading')}>
                <div className={cx('loading-center')}>
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default Inbox;

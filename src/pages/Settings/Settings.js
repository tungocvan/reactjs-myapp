import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import UploadFile from '~/components/UploadFile';
import { formattedDateTime } from '~/utils/functions';

const cx = classNames.bind(styles);
const url = process.env.REACT_APP_URL_SERVER;

function Settings() {
    const [file, setFile] = useState();
    const [hoso, setHoso] = useState('');
    const [actionHoso, setActionHoso] = useState('pending');
    const [countHoso, setCountHoso] = useState();
    const [editHoso, setEditHoso] = useState(false);
    const [editHosoStatus, setEditHosoStatus] = useState(true);
    const [hosoItem, sethosoItem] = useState('');
    const [noidung, setNoidung] = useState('');
    const [statusAction, setStatusAction] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const hanlderXuly = (item, action) => {
        setNoidung('');
        if (action === 'xoa') {
            setEditHosoStatus(true);
            const formData = new FormData();
            formData.append('id', item.id);
            fetch(url + 'delete', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let id = hoso.findIndex((itemHoso) => item.id === itemHoso.id);
                    hoso.splice(id, 1);
                    setEditHosoStatus(false);
                });
        } else {
            sethosoItem(item);
            setEditHoso(true);
        }
    };

    const updateHoso = (action) => {
        console.log('update');
        setEditHosoStatus(true);
        setStatusAction(action);
        let dateTime = new Date();
        const formData = new FormData();
        formData.append('id', hosoItem.id);
        formData.append('status', action);
        formData.append('noidung', noidung);
        formData.append('date', formattedDateTime(dateTime));
        formData.append('file', file);
        fetch(url + 'update', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEditHoso(false);
                setEditHosoStatus(false);
                setFile(null);
                setActionHoso(action);
            });
    };

    useEffect(() => {
        fetch(url + 'tracuu/hoso', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                let tmpHoso = [];
                let pending = 0;
                let deny = 0;
                let success = 0;
                if (data.hoso.data.length > 0) {
                    data.hoso.data.forEach((item) => {
                        //console.log(item.status);
                        if (item.status === 'pending') {
                            pending = pending + 1;
                        }
                        if (item.status === 'deny') {
                            deny = deny + 1;
                        }
                        if (item.status === 'success') {
                            success = success + 1;
                        }
                        if (item.status === actionHoso) {
                            tmpHoso.push(item);
                        }
                    });
                    setCountHoso({
                        pending: pending,
                        deny: deny,
                        success: success,
                    });
                    setHoso(tmpHoso);
                    setEditHosoStatus(false);
                }
                //let tmpHoso = data.hoso.data.filter((item) => item.status === actionHoso);
            });
    }, [actionHoso]);

    useEffect(() => {
        if (
            (noidung !== '' && noidung !== hosoItem.content) ||
            (statusAction !== '' && statusAction !== hosoItem.status)
        ) {
            // console.log('hosoItem:', hosoItem);
            // console.log('hoso:', hoso);
            let id = hoso.findIndex((item) => item.id === hosoItem.id);
            hoso[id].content = noidung;
            hoso[id].status = statusAction;
            //hoso[id].status = noidung;
            //setEditHosoStatus(false);
        }
    }, [editHosoStatus]);

    if (editHosoStatus === true) {
        return (
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
        );
    }

    if (editHoso === true) {
        return (
            <>
                <div className="d-flex container">
                    {hosoItem && (
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
                                    <td>{hosoItem?.name}</td>
                                    <td>{hosoItem?.phone}</td>
                                    <td>{hosoItem?.email}</td>
                                    <td>
                                        <Link to={url + 'download/' + hosoItem?.filename}>Download</Link>
                                    </td>
                                    <td>{hosoItem?.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="mb-0">
                    <label className="form-label" htmlFor="exampleTextarea">
                        Nội dung
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleTextarea"
                        rows={8}
                        defaultValue={noidung}
                        onChange={(e) => setNoidung(e.target.value)}
                    />
                    <UploadFile title="Đơn xin chuyển trường" onFileChange={handleFileChange} name="filebieumau" />
                    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-0">
                            <button
                                className="btn btn-primary btn-lg me-1 mt-2"
                                type="button"
                                onClick={() => {
                                    setNoidung('');
                                    setEditHoso(false);
                                }}
                            >
                                Quay Lại
                            </button>
                            <button
                                className="btn btn-primary btn-lg me-1 mt-2"
                                type="button"
                                onClick={() => updateHoso('deny')}
                            >
                                Không duyệt
                            </button>
                        </div>
                        <button
                            className="btn btn-primary btn-lg me-1 mt-2"
                            type="button"
                            onClick={() => updateHoso('success')}
                        >
                            Duyệt
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className={cx('wrapper')}>
            <div className="container w-100">
                <div className="row d-flex">
                    <button
                        className={
                            'btn btn-primary btn-lg me-1 mb-1 w-30 ' + cx(actionHoso === 'pending' ? 'disabled' : '')
                        }
                        type="button"
                        onClick={() => {
                            setActionHoso('pending');
                            setEditHosoStatus(true);
                        }}
                    >
                        Hồ sơ chờ duyệt <span className="badge bg-primary-500 ms-2">{countHoso.pending}</span>
                    </button>
                    <button
                        className={'btn btn-danger me-1 mb-1 w-30 ' + cx(actionHoso === 'deny' ? 'disabled' : '')}
                        type="button"
                        onClick={() => {
                            setActionHoso('deny');
                            setEditHosoStatus(true);
                        }}
                    >
                        Hồ sơ bị từ chối <span className="badge bg-primary-500 ms-2">{countHoso.deny}</span>
                    </button>
                    <button
                        className={'btn btn-success me-1 mb-1 w-30 ' + cx(actionHoso === 'success' ? 'disabled' : '')}
                        type="button"
                        onClick={() => {
                            setEditHosoStatus(true);
                            setActionHoso('success');
                        }}
                    >
                        Hồ sơ đã duyệt <span className="badge bg-primary-500 ms-2">{countHoso.success}</span>
                    </button>
                </div>
                <div className="row">
                    {hoso && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Download</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">updated_at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hoso.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to={url + 'download/' + item.filename}>Download</Link>
                                        </td>
                                        <td>{item.status}</td>
                                        <td>{item.content || ''}</td>
                                        <td>{item.updated_at}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-lg me-1 mb-1"
                                                type="button"
                                                onClick={() => hanlderXuly(item)}
                                            >
                                                Xử lý
                                            </button>
                                            <button
                                                className="btn btn-primary btn-lg me-1 mb-1"
                                                type="button"
                                                onClick={() => hanlderXuly(item, 'xoa')}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Settings;

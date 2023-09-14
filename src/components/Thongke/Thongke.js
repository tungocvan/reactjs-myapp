import { useState, useEffect } from 'react';
function Thongke() {
    const url = process.env.REACT_APP_URL_SERVER;
    const formData = new FormData();
    if (sessionStorage.getItem('unique_id')) {
        formData.append('unique_id', sessionStorage.getItem('unique_id'));
    }
    const [tk, setTk] = useState({ total: 0, user_online: 0, today: 0, yesterday: 0 });
    useEffect(() => {
        fetch(url + 'log-access', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (!sessionStorage.getItem('unique_id')) {
                    sessionStorage.setItem('unique_id', data.unique_id);
                }
            });
    }, []);
    useEffect(() => {
        fetch(url + 'log-access', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setTk(data);
                console.log('GET', data);
            });
    }, []);
    return (
        <div className="card text-white bg-primary">
            <div className="card-body">
                <h4 className="card-title text-white">THỐNG KÊ TRUY CẬP</h4>
                <table className="thongke W-100">
                    <tbody>
                        <tr>
                            <td className="thss">
                                <span className="online">Tổng số lượt truy cập: </span>
                            </td>
                            <td style={{ width: '50%', textAlign: 'right' }}>{tk?.total}</td>
                        </tr>
                        <tr>
                            <td className="thss">
                                <span className="online">Đang online: </span>
                            </td>
                            <td style={{ width: '50%', textAlign: 'right' }}>{tk?.user_online}</td>
                        </tr>
                        <tr>
                            <td className="thss">
                                <span className="homnay">Hôm nay : </span>
                            </td>
                            <td style={{ width: '50%', textAlign: 'right' }}>{tk?.today}</td>
                        </tr>
                        <tr>
                            <td className="thss">
                                <span className="homqua">Hôm qua : </span>
                            </td>
                            <td style={{ width: '50%', textAlign: 'right' }}>{tk?.yesterday}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Thongke;

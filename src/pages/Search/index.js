import React, { useState, useEffect } from 'react';
import SearchBar from "~/components/SearchBar";
function Search() {
    const [selectedOption, setSelectedOption] = useState('hoat_chat');
    const [dataSearch, setDataSearch] = useState('');
    const [dataThuoc, setDataThuoc] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleSearch = (textSearch) => {
        setDataSearch(textSearch)
        console.log('url:',url);
    }

       

    const urlOption = "https://app.tungocvan.app/api/thuoc/list?name=" + selectedOption;
    const url ="https://app.tungocvan.app/api/thuoc/trungthau?name="+selectedOption+"&search="+dataSearch;
    
    useEffect(()=>{
        if(dataSearch !==''){
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setDataThuoc(json);                
            });
        }
    },[dataSearch])

    return (
        <>
            <select name="tracuu" value={selectedOption} onChange={handleSelectChange}>            
                <option value="hoat_chat">Hoạt Chất</option>
                <option value="ten_thuoc">Tên Thuốc</option>
                <option value="nha_trung_thau">Công ty Trúng Thầu</option>                
           </select>
            <SearchBar url={urlOption} onSearch={handleSearch}  />
            <table style={{width:"100%"}}>
                        <thead>
                            <tr>
                            <th>STT</th>
                            <th>Nhóm thuốc</th>
                            <th>Tên Thuốc</th> 
                            <th>Hoạt chất</th>
                            <th>Hàm lượng</th>
                            <th>Giá trúng thầu</th>
                            <th>Số lượng</th>
                            <th>Công ty trúng thầu</th>
                            <th>Bệnh viện / SYT</th>
                            <th>Ngày QĐ trúng thầu</th>
                            <th>Thời gian hiệu lực</th>
                            </tr>
                        </thead>
                            <tbody> 
                {dataThuoc.length > 0 && dataThuoc.map((item,index) => {
                    return(                                                                      
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.nhom_thuoc}</td>
                            <td>{item.ten_thuoc}</td>
                            <td>{item.hoat_chat}</td>
                            <td>{item.ham_luong}</td>
                            <td>{item.don_gia}</td>
                            <td>{item.so_luong}</td>
                            <td>{item.nha_trung_thau}</td>
                            <td>{item.ten_bv_syt}</td>                            
                            <td>{item.ngay_qd_trung_thau}</td>
                            <td>{item.thoi_gian_thuc_hien}</td>                            
                        </tr>     
                    )
                })}
                </tbody>
            </table>
        </>
    );
}

export default Search;

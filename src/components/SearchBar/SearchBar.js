import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar({url , onSearch}) {
    
    const [choose, setChoose] = useState(true);
    const [text, setText] = useState('');
    const [textArray, setTextArray] = useState([]);
    const [data, setData] = useState([]);
    const hanlderSearch = (textSearch) => {
        setChoose(true);
        console.log(textSearch.length);
        if(textSearch.length > 2){
            const emptyArray = data.filter((item) => {
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                if (textSearch === '') {
                    console.log('textSearch');
                    return [];
                }
                return item.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase());
            });            
            setTextArray(emptyArray);
        }
        setText(textSearch);
    };

    const hanlderChoose = (data) => {
        setChoose(false);
        setText(data);
        onSearch(data);
    };

    useEffect(() => {
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, [url]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-input', text.length > 0 && choose ? 'active' : '')}>
                <a href="" target="_blank" hidden="" />
                <input
                    value={text}
                    type="text"
                    placeholder="Type to search.."
                    onChange={(e) => hanlderSearch(e.target.value)}
                />
                <div className={cx('autocom-box')}>
                    {textArray.map((data, index) => {
                        return (
                            <li key={index} onClick={() => hanlderChoose(data)}>
                                {data}
                            </li>
                        );
                    })}
                </div>
                <div className={cx('icon')}>
                    <i className={cx('fas fa-search')} />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

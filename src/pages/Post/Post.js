import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import classNames from 'classnames/bind';
//import DatePicker from '~/components/Date';
//import ImageUploading from '~/components/ImageUploading';
//import Counter from '~/components/Counter';
import Menu from '~/components/Menu';

import styles from './Post.module.scss';
//import vi from 'date-fns/locale/vi';
//registerLocale('vi', vi);
const cx = classNames.bind(styles);
function Post() {
    // const [startDate, setStartDate] = useState('');

    // const hanlderDateChange = (date) => {
    //     console.log(date);
    //     setStartDate(date);
    // };
    const [content, setContent] = useState('');

    const menuItems = [
        {
            id: 1,
            title: 'Trang chủ',
            url: '/',
        },
        {
            id: 2,
            title: 'Sản phẩm',
            url: '/products',
            children: [
                {
                    id: 3,
                    title: 'Sản phẩm 1',
                    url: '/products/1',
                },
                {
                    id: 4,
                    title: 'Sản phẩm 2',
                    url: '/products/2',
                    children: [
                        {
                            id: 5,
                            title: 'Sản phẩm con 1',
                            url: '/products/2/1',
                        },
                    ],
                },
            ],
        },
    ];

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };
    const handleChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent);
        console.log(newContent);
    };

    return (
        <div className={cx('wrapper')}>
            {/* <DatePicker onDateChange={hanlderDateChange} stateDate={startDate} /> */}
            {/* <ImageUploading /> */}
            <Menu items={menuItems} activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
            <CKEditor
                content={content}
                initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
                onChange={handleChange}
            />
        </div>
    );
}

export default Post;

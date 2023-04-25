import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UploadFile.module.scss';
import './styles.css';
// https://reactdatepicker.com/
const cx = classNames.bind(styles);

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

export default UploadFile;

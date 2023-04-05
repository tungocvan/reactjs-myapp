import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Date.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
// https://reactdatepicker.com/
const cx = classNames.bind(styles);

function DateMyPicker({ stateDate, onDateChange }) {
    //console.log(onDateChange);
    return (
        <div className="wrapper-date">
            <DatePicker
                showIcon
                selected={stateDate}
                onChange={(stateDate) => onDateChange(stateDate)}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
}

export default DateMyPicker;

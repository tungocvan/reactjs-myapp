const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // xóa khoảng trắng ở đầu và cuối chuỗi
    str = str.toLowerCase(); // chuyển đổi thành chữ thường
    str = str
        .replace(/[^a-z0-9 -]/g, '') // xóa ký tự không phải chữ cái, số, dấu cách và dấu gạch ngang
        .replace(/\s+/g, '-') // thay thế dấu cách bằng dấu gạch ngang
        .replace(/-+/g, '-'); // loại bỏ các dấu gạch ngang liên tiếp
    return str;
};

const formattedDateTime = (now, char = '', format = '') => {
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Định dạng lại chuỗi ngày/tháng/năm và giờ/phút
    const formattedDate = ('0' + date).slice(-2); // Định dạng ngày với 2 chữ số, vd: 01, 02, ..., 31
    const formattedMonth = ('0' + month).slice(-2); // Định dạng tháng với 2 chữ số, vd: 01, 02, ..., 12
    const formattedYear = year.toString().slice(-2); // Định dạng năm với 2 chữ số, vd: 21, 22, ..., 99
    const formattedHours = ('0' + hours).slice(-2); // Định dạng giờ với 2 chữ số, vd: 00, 01, ..., 23
    const formattedMinutes = ('0' + minutes).slice(-2); // Định dạng phút với 2 chữ số, vd: 00, 01, ..., 59

    // Tạo chuỗi kết quả theo định dạng "dd/mm/yy hh:mm"
    if (format === '') {
        return `${formattedDate}${char}${formattedMonth}${char}${formattedYear}`;
    } else {
        return `${formattedDate}${char}${formattedMonth}${char}${formattedYear} ${formattedHours}:${formattedMinutes}`;
    }
};

export { slugify, formattedDateTime };

const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // xóa khoảng trắng ở đầu và cuối chuỗi
    str = str.toLowerCase(); // chuyển đổi thành chữ thường
    str = str
        .replace(/[^a-z0-9 -]/g, '') // xóa ký tự không phải chữ cái, số, dấu cách và dấu gạch ngang
        .replace(/\s+/g, '-') // thay thế dấu cách bằng dấu gạch ngang
        .replace(/-+/g, '-'); // loại bỏ các dấu gạch ngang liên tiếp
    return str;
};

export { slugify };

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);
function Product() {
 
    return (        
        <div className={cx('wrapper')}>
            <h3>Product PAGE</h3>           
        </div>
    )
        
}

export default Product;

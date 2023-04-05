import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);
function Product() {
    const productSlug = useParams();
    const { categoryId, productId } = productSlug;
    console.log('category:', categoryId);
    console.log('product:', productId);
    //console.log('productSlug:', productSlug);
    return (
        <div className={cx('wrapper')}>
            <h3>Product PAGE</h3>
        </div>
    );
}

export default Product;

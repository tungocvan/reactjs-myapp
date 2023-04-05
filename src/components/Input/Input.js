import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({    
    className,
    ...passProps
}) {
    let Type = 'text';
    const props = {        
        ...passProps,
    };

   
    const classes = cx('wrapper', {
        [className]: className,            
    });

    return (
        <input className={classes} {...props} />            
    );
}

Input.propTypes = {
    className: PropTypes.string,
};

export default Input;

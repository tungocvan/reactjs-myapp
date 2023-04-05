import React from 'react';
import ImageUploading from 'react-images-uploading';
import classNames from 'classnames/bind';
import styles from './ImageUploading.module.scss';
import './styles.css';
// https://reactdatepicker.com/
const cx = classNames.bind(styles);

function ImageMyUploading() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 10;
    const maxFileSize = 5 * 1024 * 1024;
    const acceptType = ['jpg', 'gif', 'png', 'bmp', 'doc'];
    const onChange = (imageList, addUpdateIndex, errors) => {
        // data for submit
        //console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <div className="AppUpload">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                maxFileSize={maxFileSize}
                acceptType={acceptType}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                    errors,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => {
                            return (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />

                                    <div className="image-item__btn-wrapper">
                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                            );
                        })}
                        {errors && (
                            <div>
                                {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                {errors.acceptType && <span>Your selected file type is not allow</span>}
                                {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                                {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                            </div>
                        )}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default ImageMyUploading;

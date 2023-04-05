//  profile: require('~/assets/images/logo.png'),
import classNames from 'classnames/bind';
import styles from './Cvprofile.module.scss';
const cx = classNames.bind(styles);
function Cvprofile() {
    return (
        <div className={cx('resume')}>
            <div className={cx('resume_left')}>
                <div className={cx('resume_content')}>
                    <div className={cx('resume_item', ' resume_info')}>
                        <div className={cx('title')}>
                            <p className={cx('bold')}>QUI TRÌNH CÁC BƯỚC </p>
                            <p className={cx('regular')}>Designer</p>
                        </div>
                        <ul>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fas', ' fa-map-signs')} />
                                </div>
                                <div className={cx('data')}>
                                    21 Street, Texas <br /> USA
                                </div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fas ', 'fa-mobile-alt')} />
                                </div>
                                <div className={cx('data')}>+324 4445678</div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fas ', 'fa-envelope')} />
                                </div>
                                <div className={cx('data')}>stephen@gmail.com</div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fab ', ' fa-weebly')} />
                                </div>
                                <div className={cx('data')}>www.stephen.com</div>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('resume_item  ', 'resume_skills')}>
                        <div className={cx('title')}>
                            <p className={cx('bold')}>skill's</p>
                        </div>
                        <ul>
                            <li>
                                <div className={cx('skill_name')}>HTML</div>
                                <div className={cx('skill_progress')}>
                                    <span style={{ width: '80%' }} />
                                </div>
                                <div className={cx('skill_per')}>80%</div>
                            </li>
                            <li>
                                <div className={cx('skill_name')}>CSS</div>
                                <div className={cx('skill_progress')}>
                                    <span style={{ width: '70%' }} />
                                </div>
                                <div className={cx('skill_per')}>70%</div>
                            </li>
                            <li>
                                <div className={cx('skill_name')}>SASS</div>
                                <div className={cx('skill_progress')}>
                                    <span style={{ width: '90%' }} />
                                </div>
                                <div className={cx('skill_per')}>90%</div>
                            </li>
                            <li>
                                <div className={cx('skill_name')}>JS</div>
                                <div className={cx('skill_progress')}>
                                    <span style={{ width: '60%' }} />
                                </div>
                                <div className={cx('skill_per')}>60%</div>
                            </li>
                            <li>
                                <div className={cx('skill_name')}>JQUERY</div>
                                <div className={cx('skill_progress')}>
                                    <span style={{ width: '88%' }} />
                                </div>
                                <div className={cx('skill_per')}>88%</div>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('resume_item  ', 'resume_social')}>
                        <div className={cx('title')}>
                            <p className={cx('bold')}>Social</p>
                        </div>
                        <ul>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fab ', ' fa-facebook-square')} />
                                </div>
                                <div className={cx('data')}>
                                    <p className={cx('semi-bold')}>Facebook</p>
                                    <p>Stephen@facebook</p>
                                </div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fab ', ' fa-twitter-square')} />
                                </div>
                                <div className={cx('data')}>
                                    <p className={cx('semi-bold')}>Twitter</p>
                                    <p>Stephen@twitter</p>
                                </div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fab ', ' fa-youtube')} />
                                </div>
                                <div className={cx('data')}>
                                    <p className={cx('semi-bold')}>Youtube</p>
                                    <p>Stephen@youtube</p>
                                </div>
                            </li>
                            <li>
                                <div className={cx('icon')}>
                                    <i className={cx('fab ', ' fa-linkedin')} />
                                </div>
                                <div className={cx('data')}>
                                    <p className={cx('semi-bold')}>Linkedin</p>
                                    <p>Stephen@linkedin</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('resume_right')}>
                <div className={cx('resume_item  ', 'resume_about')}>
                    <div className={cx('title')}>
                        <p className={cx('bold')}>HƯỚNG DẪN</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis
                        distinctio culpa officia totam atque exercitationem inventore repudiandae?
                    </p>
                </div>
                <div className={cx('resume_item  ', 'resume_work')}>
                    <div className={cx('title')}>
                        <p className={cx('bold')}>Dành cho tiểu học trong nước</p>
                    </div>
                    <ul>
                        <li>
                            <div className={cx('date')}>Đơn xin chuyển trường</div>
                            <div className={cx('info')}>
                                <p className={cx('semi-bold')}>Tải mẫu</p>
                                <p>Nộp mẫu</p>
                            </div>
                        </li>
                        <li>
                            <div className={cx('date')}>Phiếu thông tin học sinh</div>
                            <div className={cx('info')}>
                                <p className={cx('semi-bold')}>Tải mẫu</p>
                                <p>Nộp mẫu</p>
                            </div>
                        </li>
                        <li>
                            <div className={cx('date')}>Tiến độ thực hiện chương trình</div>
                            <div className={cx('info')}>
                                <p className={cx('semi-bold')}>Tải mẫu</p>
                                <p>Nộp mẫu</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cx('resume_item  ', 'resume_education')}>
                    <div className={cx('title')}>
                        <p className={cx('bold')}>Dành cho tiểu học từ nước ngoài về</p>
                    </div>
                    <ul>
                        <li>
                            <div className={cx('date')}>Đơn xin chuyển trường</div>
                            <div className={cx('info')}>
                                <p className={cx('semi-bold')}>Tải mẫu</p>
                                <p>Nộp mẫu</p>
                            </div>
                        </li>
                        <li>
                            <div className={cx('date')}>Phiếu thông tin học sinh</div>
                            <div className={cx('info')}>
                                <p className={cx('semi-bold')}>Tải mẫu</p>
                                <p>Nộp mẫu</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cx('resume_item  ', 'resume_hobby')}>
                    <div className={cx('title')}>
                        <p className={cx('bold')}>Hobby</p>
                    </div>
                    <ul>
                        <li>
                            <i className={cx('fas ', 'fa-book')} />
                        </li>
                        <li>
                            <i className={cx('fas ', 'fa-gamepad')} />
                        </li>
                        <li>
                            <i className={cx('fas ', 'fa-music')} />
                        </li>
                        <li>
                            <i className={cx('fab ', ' fa-pagelines')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cvprofile;

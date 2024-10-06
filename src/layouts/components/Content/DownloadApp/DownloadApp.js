/* eslint-disable jsx-a11y/alt-text */
import Styles from './DownloadApp.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

const cx = classNames.bind(Styles);

function DownloadApp() {
    const [close, setClose] = useState(true);

    const handleClose = () => {
        console.log('Button X clicked');
        setClose(false);
    };
    if (!close) return null;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('backdrop')}>
                <div tabIndex="-1" className={cx('content-container')}>
                    <div className={cx('content-vertical-container')}>
                        <div className={cx('content-vertical-padding')}>
                            <section className={cx('card-download')}>
                                <div className={cx('header-download')}>
                                    <div onClick={handleClose}>
                                        <CloseIcon className={cx('close-icon')} />
                                    </div>
                                    <p className={cx('header-text')}>Tải ứng dụng TikTok</p>
                                </div>
                                <div className={cx('content-download')}>
                                    <div className={cx('content-download-top')}>
                                        <p>Hãy quét mã QR để tải TikTok về máy</p>
                                        <div className={cx('qr-download')}>
                                            <img
                                                style={{ width: 176, height: 176 }}
                                                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                                alt="th1243"
                                            ></img>
                                        </div>
                                    </div>

                                    <div className={cx('content-download-bottom')}>
                                        <p>Tải về từ cửa hàng ứng dụng</p>
                                        <div className={cx('software-download')}>
                                            <Link className={cx('software-download-link')}>
                                                <img
                                                    className={cx('app-img')}
                                                    alt="microsoft-store"
                                                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                                ></img>
                                            </Link>
                                            <Link className={cx('software-download-link')}>
                                                <img
                                                    className={cx('app-img')}
                                                    alt="apple-store"
                                                    src="https://logos-download.com/wp-content/uploads/2016/06/Available_on_the_App_Store_logo.png"
                                                ></img>
                                            </Link>
                                            {/* <Link className={cx('software-download-link')}>
                                                <img
                                                    className={cx('app-img')}
                                                    alt="amazon-store"
                                                    src="https://collegiateacademy.co.uk/wp-content/uploads/2021/01/Amazon-appstore-1024x525.png"
                                                ></img>
                                            </Link>
                                            <Link className={cx('software-download-link')}>
                                                <img
                                                    className={cx('app-img')}
                                                    alt="google-store"
                                                    src="https://freepngimg.com/download/android/67006-app-play-google-android-store-free-clipart-hd.png"
                                                ></img>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;

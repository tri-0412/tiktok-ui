import Styles from './Contacts.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);
function Contacts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('reward-coin')}>
                <Link
                    href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                    target="_blank"
                >
                    <div className={cx('reward-container')}>
                        <img
                            className={cx('reward-img')}
                            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                            alt="coin"
                        ></img>
                        <div className={cx('reward-content')}>
                            <div className={cx('reward-text')}>
                                <h4>Tạo hiệu ứng TikTok, nhận phần thưởng</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cx('contacts')}>
                <h4 className={cx('contact-title')}>Công Ty</h4>
                {/* Add your contact list here */}
                <span>
                    <Link>Giới thiệu</Link>
                    <Link>Bản tin</Link>
                    <Link>Liên hệ</Link>
                    <Link>Sự nghiệp</Link>
                </span>
            </div>
            <div className={cx('contacts')}>
                <h4 className={cx('contact-title')}>Chương trình</h4>
                {/* Add your contact list here */}
                <span className={cx('contact-items')}>
                    <Link>TikTok for Good</Link>
                    <Link>Quảng cáo</Link>
                    <Link>TikTok LIVE Creator Networks</Link>
                    <Link>Phần thưởng trên TikTok</Link>
                </span>
            </div>
            <div className={cx('contacts')}>
                <h4 className={cx('contact-title')}>Điều khoản và chính sách</h4>
                {/* Add your contact list here */}
                <span>
                    <Link>Điều khoản</Link>
                    <Link>Chính sách Quyền riêng tư</Link>
                    <Link>Creator Academy</Link>
                    <Link>Hướng dẫn Cộng đồng</Link>
                </span>
            </div>
            <div className={cx('contacts')}>
                <span>Thêm</span>
            </div>
            <div className={cx('contacts')}>
                <span> © 2024 TikTok </span>
            </div>
        </div>
    );
}

export default Contacts;

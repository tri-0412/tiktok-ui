import Styles from './SharePreview.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FacebookIcon, DipIcon, RepostIcon, SendIcon, CopyIcon } from '~/components/Icons';

const cx = classNames.bind(Styles);
function SharePreview() {
    return (
        <div className={cx('wrapper')}>
            <Link class={cx('share-items')}>
                <span>
                    <RepostIcon />
                </span>
                <span className={cx('share-preview-text')}>Đăng lại</span>
            </Link>

            <Link class={cx('share-items')}>
                <span>
                    <DipIcon />
                </span>
                <span className={cx('share-preview-text')}>Nhúng </span>
            </Link>

            <Link class={cx('share-items')}>
                <span>
                    <SendIcon />
                </span>
                <span className={cx('share-preview-text')}>Gửi đến bạn bè </span>
            </Link>

            <Link class={cx('share-items')}>
                <span>
                    <FacebookIcon />
                </span>
                <span className={cx('share-preview-text')}>Chia sẻ với Facebook</span>
            </Link>
            <Link class={cx('share-items')}>
                <span>
                    <CopyIcon />
                </span>
                <span className={cx('share-preview-text')}> Sao chép liên kết</span>
            </Link>
        </div>
    );
}

export default SharePreview;

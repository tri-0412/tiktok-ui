import classNames from 'classnames/bind';
import styles from './InboxPreview.module.scss';
import { NotiIcon, MoreNofiIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function InboxPreview() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('DivInboxContainer')}>
                    <div className={cx('DivInboxHeaderContainer')}>
                        <h2 className={cx('H2InboxTitle')}>Thông báo </h2>
                        <div className={cx('DivGroupContainer')}>
                            <button
                                tabIndex="-1"
                                className={cx('ButtonGroupItem')}
                                style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}
                            >
                                Tất cả họat động
                            </button>
                            <button tabIndex="-1" className={cx('ButtonGroupItem')}>
                                Thích
                            </button>
                            <button tabIndex="-1" className={cx('ButtonGroupItem')}>
                                Bình luận
                            </button>
                            <button tabIndex="-1" className={cx('ButtonGroupItem')}>
                                Lượt nhắc đến và gắn thẻ
                            </button>
                            <button tabIndex="-1" className={cx('ButtonGroupItem')}>
                                Follower
                            </button>
                        </div>
                    </div>
                    <div className={cx('DivInboxContentContainer')}>
                        <div className={cx('DivScrollNoti')}>
                            <p className={cx('PTimeGroupTitle')}>Mới</p>
                            <ul className={cx('UlInboxItemListContainer')}>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivSystemNotifItemContainer')}>
                                        <div className={cx('DivSystemNotifIconContainer')}>
                                            <NotiIcon />
                                        </div>
                                        <div className={cx('DivContentContainer')}>
                                            <p className={cx('PTitleText')}>Thông báo hệ thống</p>
                                            <p className={cx('PSystemNotifDescText ')}>
                                                LIVE : Đang diễn ra các tiết mục nổi bật của Thêm Bạn Thêm Vui Mùa 02,
                                                hãy theo dõi và ủng hộ nhé
                                            </p>
                                        </div>
                                        <div className={cx('DivArrowContainer')}>
                                            <MoreNofiIcon />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <p className={cx('PTimeGroupTitle')}>Trước đây </p>
                            <ul className={cx('UlInboxItemListContainer')}>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivItemContainer')}>
                                        <span
                                            className={cx('SpanAvatarContainer')}
                                            style={{ flex: '0 0 48', width: 48, height: 48 }}
                                        >
                                            <img
                                                className={cx('ImgAvatar')}
                                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e6ec1ed93b77de5f183c4f5bb2cfc026~c5_100x100.jpeg?lk3s=1a13ec60&nonce=31139&refresh_token=e3078de3fe31df7d8cdfb904ca82d730&x-expires=1723284000&x-signature=N0rcV2DJEMNHbGkdD4aB3xr%2FnDE%3D&shp=1a13ec60&shcp=-"
                                                alt=""
                                            />
                                        </span>
                                        <div className={cx('DivContentContainer')}>
                                            <Link className={cx('ATitleLink')} href="/@doannhattrieu79">
                                                Đoàn Nhất Triều
                                            </Link>
                                            <p className={cx('PDescText')}> follow bạn. 5-20</p>
                                        </div>
                                        <button className={cx('StyledFollowButton')}>Follow lại</button>
                                    </div>
                                </li>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivItemContainer')}>
                                        <span
                                            className={cx('SpanAvatarContainer')}
                                            style={{ flex: '0 0 48', width: 48, height: 48 }}
                                        >
                                            <img
                                                className={cx('ImgAvatar')}
                                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e6ec1ed93b77de5f183c4f5bb2cfc026~c5_100x100.jpeg?lk3s=1a13ec60&nonce=31139&refresh_token=e3078de3fe31df7d8cdfb904ca82d730&x-expires=1723284000&x-signature=N0rcV2DJEMNHbGkdD4aB3xr%2FnDE%3D&shp=1a13ec60&shcp=-"
                                                alt=""
                                            />
                                        </span>
                                        <div className={cx('DivContentContainer')}>
                                            <Link className={cx('ATitleLink')} href="/@doannhattrieu79">
                                                Đoàn Nhất Triều
                                            </Link>
                                            <p className={cx('PDescText')}> follow bạn. 5-20</p>
                                        </div>
                                        <button className={cx('StyledFollowButton')}>Follow lại</button>
                                    </div>
                                </li>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivItemContainer')}>
                                        <span
                                            className={cx('SpanAvatarContainer')}
                                            style={{ flex: '0 0 48', width: 48, height: 48 }}
                                        >
                                            <img
                                                className={cx('ImgAvatar')}
                                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e6ec1ed93b77de5f183c4f5bb2cfc026~c5_100x100.jpeg?lk3s=1a13ec60&nonce=31139&refresh_token=e3078de3fe31df7d8cdfb904ca82d730&x-expires=1723284000&x-signature=N0rcV2DJEMNHbGkdD4aB3xr%2FnDE%3D&shp=1a13ec60&shcp=-"
                                                alt=""
                                            />
                                        </span>
                                        <div className={cx('DivContentContainer')}>
                                            <Link className={cx('ATitleLink')} href="/@doannhattrieu79">
                                                Đoàn Nhất Triều
                                            </Link>
                                            <p className={cx('PDescText')}> follow bạn. 5-20</p>
                                        </div>
                                        <button className={cx('StyledFollowButton')}>Follow lại</button>
                                    </div>
                                </li>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivItemContainer')}>
                                        <span
                                            className={cx('SpanAvatarContainer')}
                                            style={{ flex: '0 0 48', width: 48, height: 48 }}
                                        >
                                            <img
                                                className={cx('ImgAvatar')}
                                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e6ec1ed93b77de5f183c4f5bb2cfc026~c5_100x100.jpeg?lk3s=1a13ec60&nonce=31139&refresh_token=e3078de3fe31df7d8cdfb904ca82d730&x-expires=1723284000&x-signature=N0rcV2DJEMNHbGkdD4aB3xr%2FnDE%3D&shp=1a13ec60&shcp=-"
                                                alt=""
                                            />
                                        </span>
                                        <div className={cx('DivContentContainer')}>
                                            <Link className={cx('ATitleLink')} href="/@doannhattrieu79">
                                                Đoàn Nhất Triều
                                            </Link>
                                            <p className={cx('PDescText')}> follow bạn. 5-20</p>
                                        </div>
                                        <button className={cx('StyledFollowButton')}>Follow lại</button>
                                    </div>
                                </li>
                                <li className={cx('LiInboxItemWrapper')}>
                                    <div className={cx('DivItemContainer')}>
                                        <span
                                            className={cx('SpanAvatarContainer')}
                                            style={{ flex: '0 0 48', width: 48, height: 48 }}
                                        >
                                            <img
                                                className={cx('ImgAvatar')}
                                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e6ec1ed93b77de5f183c4f5bb2cfc026~c5_100x100.jpeg?lk3s=1a13ec60&nonce=31139&refresh_token=e3078de3fe31df7d8cdfb904ca82d730&x-expires=1723284000&x-signature=N0rcV2DJEMNHbGkdD4aB3xr%2FnDE%3D&shp=1a13ec60&shcp=-"
                                                alt=""
                                            />
                                        </span>
                                        <div className={cx('DivContentContainer')}>
                                            <Link className={cx('ATitleLink')} href="/@doannhattrieu79">
                                                Đoàn Nhất Triều
                                            </Link>
                                            <p className={cx('PDescText')}> follow bạn. 5-20</p>
                                        </div>
                                        <button className={cx('StyledFollowButton')}>Follow lại</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InboxPreview;

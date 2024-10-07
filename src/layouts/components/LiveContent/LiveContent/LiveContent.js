/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Styles from './LiveContent.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon, PersonViewIcon, PrevPageIcon } from '~/components/Icons';
import { useRef, useState, useEffect } from 'react';

const cx = classNames.bind(Styles);

function LiveContent({ children }) {
    const scrollContainerRef = useRef(null);
    const [isVisibleScroll, setIsVisibleScroll] = useState(false);
    const [isVisibleScrollWrap, setIsVisibleScrollWrap] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);

    //-------- Xử lí nút PrevPageIcon
    useEffect(() => {
        const toggleVisibleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsVisibleScroll(true);
            } else {
                setIsVisibleScroll(false);
            }
        };
        window.addEventListener('scroll', toggleVisibleScroll);
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', toggleVisibleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Check the scroll position of the container to toggle the visibility of the left arrow
    const handleScrollItem = () => {
        if (scrollContainerRef.current) {
            setIsVisibleScrollWrap(scrollContainerRef.current.scrollLeft > 0);
        }
    };

    // const handleScrollLeft = () => {
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollBy({
    //             left: -300,
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    const scrollToPrevButton = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScrollItem);
        }

        // Cleanup function
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScrollItem);
            }
        };
    }, []);

    // const handleButtonPage = (e) => {
    //     // Tìm button được click
    //     const clickedButton = e.target;
    //     // Khai báo biến buttons trong hàm
    //     const buttons = document.querySelectorAll('.DivFeedTabItemListWrapper .link-button');
    //     // Set state cho button được click
    //     setClickedButton(clickedButton);

    //     // Đặt màu đen cho button được click
    //     clickedButton.style.backgroundColor = 'black';
    //     clickedButton.style.color = 'var(--white)';

    //     // Đặt màu mặc định cho các button còn lại
    //     buttons.forEach((button) => {
    //         if (button !== clickedButton) {
    //             button.style.backgroundColor = 'var(--white)';
    //             button.style.color = 'var(--black)';
    //         }
    //     });
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('DivScrollWrapper')}>
                <div className={cx('DivFeedTabContainer')}>
                    {isVisibleScrollWrap && (
                        <div className={cx('DivDirectionButtonContainer')} onClick={scrollToPrevButton}>
                            <div className={cx('DivChevronIconContainer')}>
                                <ChevronLeftIcon className={cx('chevron-icon')} />
                            </div>
                        </div>
                    )}
                    <div
                        className={cx('DivFeedTabItemListWrapper')}
                        style={{ cursor: 'pointer' }}
                        // onClick={handleButtonPage}
                        ref={scrollContainerRef}
                    >
                        {/* Sử dụng map để render các Link button */}

                        <Link
                            // key={index}
                            className={cx('link-button', 'primary-button-onpage')}
                            aria-current="page"
                            style={{
                                backgroundColor: 'var(--primary-button-onpage)',
                                color: 'var(--white)',
                            }}
                            href="/live"
                            // onClick={handleButtonPage}
                        >
                            Dành cho bạn
                        </Link>

                        <Link className={cx('link-button')} href="/live">
                            Đang Follow
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Game
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Phong cách sống
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Garena Free Fire
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            PUBG: BATTLEGROUNDS
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Liên Quân
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Mobile Legends
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Roblox
                        </Link>
                        <Link className={cx('link-button')} href="/live">
                            Fortnite
                        </Link>
                    </div>

                    <div className={cx('DivDirectionButtonRightContainer')} onClick={handleScrollRight}>
                        <div className={cx('DivChevronRightIconContainer')}>
                            <ChevronRightIcon className={cx('chevron-right-icon')} />
                        </div>
                    </div>
                </div>

                <div className={cx('DivFeedsContainer')}>
                    <div className={cx('DivAdaptiveFeedsWrapper')}>
                        <div className={cx('DivSwiperContainer')}>
                            <div className={cx('DivSwiper')}>
                                <div className={cx('DivSwiperEventArea')}></div>
                                <div className={cx('DivSwiperContent ')}>
                                    <div className={cx('DivFeedCard')}>
                                        <div className={cx('DivBgContainer')}>
                                            <div className={cx('DivBgImg')}>
                                                <iframe
                                                    objectFit="cover"
                                                    width="100%"
                                                    height="auto"
                                                    src="https://www.youtube.com/embed/1AVtmH1uJcI"
                                                    title="CRIS - Có Em ( Official Audio )"
                                                    frameBorder="0"
                                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    // referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('DivDivider')}></div>
                </div>
                {/* ----------------------------Esports World Cup------------------ */}
                <div className={cx('DivSectionsContainer ')}>
                    <div className={cx('DivSectionContainer')}>
                        <div className={cx('DivSectionHeader')}>
                            <div className={cx('DivSectionTitle')}>Esports World Cup</div>
                            <div className={cx('DivSectionViewMore')}>Xem tất cả</div>
                        </div>
                        <div className={cx('DivBasicRowContainer')}>
                            <div className={cx('DivCardContainer')}>
                                <div className={cx('DivLiveContentArea')}>
                                    <div className={cx('DivLiveTagWrapper')}>
                                        <div className={cx('DivLiveTag')}>LIVE</div>
                                        <div className={cx('DivLiveViewer')}>
                                            <PersonViewIcon />
                                            <span className={cx('DivLiveViewerNum')}>14.2k</span>
                                        </div>
                                    </div>
                                    <div className={cx('DivImgWrapper')}>
                                        <img
                                            className={cx('Image-basic')}
                                            src="https://p16-webcast.tiktokcdn.com/webcast-sg/7398368328706738961~tplv-resize:400:400.webp"
                                            alt="video"
                                            style={{ display: 'block' }}
                                        />
                                    </div>
                                    <Link
                                        href="https://www.tiktok.com/@mpl.id.official/live"
                                        className={cx('StyledHoverLink ')}
                                    ></Link>
                                </div>
                                <div className={cx('DivLiveInfo')}>
                                    <img
                                        className={cx('ImgUserAvatar')}
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cdbc9b9670b44dc6ace7f872073d5f32.webp?lk3s=a5d48078&nonce=82082&refresh_token=44d40b30d1d07a4a5b62bb5ab04d06d2&x-expires=1722837600&x-signature=%2BU7HNn6LwnmTTnZxdX5zERO4QtI%3D&shp=a5d48078&shcp=fdd36af4"
                                        alt=""
                                    />
                                    <Link
                                        className={cx('StyledLinkLiveTextArea')}
                                        title="SPS Finals Playoffs | S5 D2"
                                        href="https://www.tiktok.com/@mplmy/live"
                                    >
                                        <div className={cx('DivLiveTitle')}>SPS Finals Playoffs | S5 D2</div>
                                        <div className={cx('DivUserName')}>mplmy</div>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('DivCardContainer')}>
                                <div className={cx('DivLiveContentArea')}>
                                    <div className={cx('DivLiveTagWrapper')}>
                                        <div className={cx('DivLiveTag')}>LIVE</div>
                                        <div className={cx('DivLiveViewer')}>
                                            <PersonViewIcon />
                                            <span className={cx('DivLiveViewerNum')}>20.2k</span>
                                        </div>
                                    </div>
                                    <div className={cx('DivImgWrapper')}>
                                        <img
                                            className={cx('Image-basic')}
                                            src="https://p16-webcast.tiktokcdn.com/webcast-sg/7398406571934173968~tplv-resize:400:400.webp"
                                            alt="video"
                                            style={{ display: 'block' }}
                                        />
                                    </div>
                                    <Link
                                        href="https://www.tiktok.com/@mpl.id.official/live"
                                        className={cx('StyledHoverLink ')}
                                    ></Link>
                                </div>
                                <div className={cx('DivLiveInfo')}>
                                    <img
                                        className={cx('ImgUserAvatar')}
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cdbc9b9670b44dc6ace7f872073d5f32.webp?lk3s=a5d48078&nonce=82082&refresh_token=44d40b30d1d07a4a5b62bb5ab04d06d2&x-expires=1722837600&x-signature=%2BU7HNn6LwnmTTnZxdX5zERO4QtI%3D&shp=a5d48078&shcp=fdd36af4"
                                        alt=""
                                    />
                                    <Link
                                        className={cx('StyledLinkLiveTextArea')}
                                        title="SPS Finals Playoffs | S5 D2"
                                        href="https://www.tiktok.com/@mplmy/live"
                                    >
                                        <div className={cx('DivLiveTitle')}>SPS Finals Playoffs | S5 D2</div>
                                        <div className={cx('DivUserName')}>mplmy</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------  Chơi game -------------------------- */}

                <div className={cx('DivSectionContainer')} style={{ marginTop: 80 }}>
                    <div className={cx('DivSectionHeader')}>
                        <div className={cx('DivSectionTitle')}>Chơi game</div>
                        <div className={cx('DivSectionViewMore')}>Xem tất cả</div>
                    </div>
                    <div className={cx('DivBasicRowContainer')}>
                        <div className={cx('DivCardContainer')}>
                            <div className={cx('DivLiveContentArea')}>
                                <div className={cx('DivLiveTagWrapper')}>
                                    <div className={cx('DivLiveTag')}>LIVE</div>
                                    <div className={cx('DivLiveViewer')}>
                                        <PersonViewIcon />
                                        <span className={cx('DivLiveViewerNum')}>14.2k</span>
                                    </div>
                                </div>
                                <div className={cx('DivImgWrapper')}>
                                    <img
                                        className={cx('Image-basic')}
                                        src="https://p16-webcast.tiktokcdn.com/webcast-va/8166c2f7eb978d15058dd32c73b86c1c~tplv-obj.image"
                                        alt="video"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                                <Link
                                    href="https://www.tiktok.com/@mpl.id.official/live"
                                    className={cx('StyledHoverLink ')}
                                ></Link>
                            </div>
                            <div className={cx('DivLiveInfo')}>
                                <img
                                    className={cx('ImgUserAvatar')}
                                    src="https://p16-webcast.tiktokcdn.com/webcast-va/8166c2f7eb978d15058dd32c73b86c1c~tplv-obj.image"
                                    alt=""
                                />
                                <Link
                                    className={cx('StyledLinkLiveTextArea')}
                                    title="SPS Finals Playoffs | S5 D2"
                                    href="https://www.tiktok.com/@mplmy/live"
                                >
                                    <div className={cx('DivLiveTitle')}>Trở lại tuổi thơ võ lâm</div>
                                    <div className={cx('DivUserName')}>kubo_live</div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('DivCardContainer')}>
                            <div className={cx('DivLiveContentArea')}>
                                <div className={cx('DivLiveTagWrapper')}>
                                    <div className={cx('DivLiveTag')}>LIVE</div>
                                    <div className={cx('DivLiveViewer')}>
                                        <PersonViewIcon />
                                        <span className={cx('DivLiveViewerNum')}>20.2k</span>
                                    </div>
                                </div>
                                <div className={cx('DivImgWrapper')}>
                                    <img
                                        className={cx('Image-basic')}
                                        src="https://p16-webcast.tiktokcdn.com/webcast-va/53c966d8549c8ebcebc9934d62a5b4fb~tplv-obj.image"
                                        alt="video"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                                <Link
                                    href="https://www.tiktok.com/@mpl.id.official/live"
                                    className={cx('StyledHoverLink ')}
                                ></Link>
                            </div>
                            <div className={cx('DivLiveInfo')}>
                                <img
                                    className={cx('ImgUserAvatar')}
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cdbc9b9670b44dc6ace7f872073d5f32.webp?lk3s=a5d48078&nonce=82082&refresh_token=44d40b30d1d07a4a5b62bb5ab04d06d2&x-expires=1722837600&x-signature=%2BU7HNn6LwnmTTnZxdX5zERO4QtI%3D&shp=a5d48078&shcp=fdd36af4"
                                    alt=""
                                />
                                <Link
                                    className={cx('StyledLinkLiveTextArea')}
                                    title="SPS Finals Playoffs | S5 D2"
                                    href="https://www.tiktok.com/@mplmy/live"
                                >
                                    <div className={cx('DivLiveTitle')}>Free Free - Sống dai thành huyền thoại</div>
                                    <div className={cx('DivUserName')}>C4 Gaming</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------  Danh mục đề xuất   ----------------------- */}
                <div className={cx('DivSectionContainer')} style={{ marginTop: 80 }}>
                    <div className={cx('DivSectionHeader')}>
                        <div className={cx('DivSectionTitle')}>Danh mục đề xuất</div>
                        <div className={cx('DivSectionViewMore')}>Xem tất cả</div>
                    </div>
                    <div className={cx('DivBasicRowContainer1')}>
                        <div className={cx('DivCategoryCardContainer1')}>
                            <div className={cx('DivCategoryCardImgResponsive1')}>
                                <div className={cx('DivCategoryCardImgWrapper1')}>
                                    <img
                                        className={cx('img1')}
                                        src="https://p16-tikcast-game-sign-sg.ibyteimg.com/tos-alisg-i-agnx3xz2cs-sg/Garena_Free_Fire_co52c7.png?x-expires=1723272318&x-signature=eTJkiyiDd97TSRp%2BKd2m6CPM0b4%3D"
                                        alt="Garena Free Fire"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                            </div>
                            <div className={cx('DivCategoryCardTitle1')}>Garena Free Fire</div>
                            <div className={cx('DivCategoryCardViewer1')}>58.9k người đang xem</div>
                            <Link
                                title="Garena Free Fire"
                                className={cx('StyledHoverLink1')}
                                href="/live/category/gaming/Garena_Free_Fire"
                            ></Link>
                        </div>

                        <div className={cx('DivCategoryCardContainer1')}>
                            <div className={cx('DivCategoryCardImgResponsive1')}>
                                <div className={cx('DivCategoryCardImgWrapper1')}>
                                    <img
                                        className={cx('img1')}
                                        src="https://p16-tikcast-game-sign-sg.ibyteimg.com/tos-alisg-i-agnx3xz2cs-sg/PUBG:_Battlegrounds_co7j43.png?x-expires=1723284383&x-signature=MkjGjY9t4ilYAbNNN2TSbtSFD1U%3D"
                                        alt="PUBG: BATTLEGROUNDS"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                            </div>
                            <div className={cx('DivCategoryCardTitle1')}>PUBG: BATTLEGROUNDS</div>
                            <div className={cx('DivCategoryCardViewer1')}>33.5k người đang xem</div>
                            <Link
                                title="PUBG: BATTLEGROUNDS"
                                className={cx('StyledHoverLink1')}
                                href="/live/category/gaming/PUBG:_BATTLEGROUNDS"
                            ></Link>
                        </div>

                        <div className={cx('DivCategoryCardContainer1')}>
                            <div className={cx('DivCategoryCardImgResponsive1')}>
                                <div className={cx('DivCategoryCardImgWrapper1')}>
                                    <img
                                        className={cx('img1')}
                                        src="https://p16-tikcast-game-sign-sg.ibyteimg.com/tos-alisg-i-agnx3xz2cs-sg/Arena_of_Valor_co2pg0.png?x-expires=1723284383&x-signature=nniF7SWd9a4tBOfF42%2BR9TT7tKI%3D"
                                        alt="Garena Liên Quân"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                            </div>
                            <div className={cx('DivCategoryCardTitle1')}>Liên Quân</div>
                            <div className={cx('DivCategoryCardViewer1')}>27.9k người đang xem</div>
                            <Link
                                title="Garena Liên Quân"
                                className={cx('StyledHoverLink1')}
                                href="/live/category/gaming/Arena_of_Valor"
                            ></Link>
                        </div>
                    </div>
                </div>
                <div>
                    {isVisibleScroll && (
                        <button onClick={scrollToTop} className={cx('ButtonIconContainer')}>
                            <PrevPageIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

LiveContent.propTypes = {
    children: PropTypes.node,
};

export default LiveContent;

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './ButtonComponents.module.scss';
import { TymIcon, CommentIcon, MoreIcon, SaveIcon, ShareIcon, FollowedIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SharePreview from './SharePreview/SharePreview';

const cx = classNames.bind(Styles);

const ButtonsComponent = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [followed, setFollowed] = useState(false);

    const handleFollowed = () => {
        console.log('Followed status before:', followed);
        setFollowed((prevFollowed) => !prevFollowed);
        console.log('Followed status after:', followed);
    };

    const handleSaved = () => {
        setSaved(!saved, true);
    };

    const handleLiked = () => {
        setLiked(!liked, true);
    };
    const handleShare = (props) => {
        // share logic

        return (
            <div tabIndex="-1" {...props} className={cx('share-preview')}>
                <PopperWrapper>
                    <SharePreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('buttons-container')}>
            <div className={cx('avatar-items')}>
                <span>
                    <img
                        className={cx('avatar')}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAllBMVEX29vYzMzPGxsarq6t4eHju7u5LS0tdXV3n5+fW1tY3Nzfz8/OOjo5ERET19fVTU1Pb29vq6uq+vr7l5eWjo6Pi4uLR0dGAgIA/Pz/V1dWSkpJpaWnt7e3KysqVlZVjY2NXV1eenp5ycnJfX19aWlrw8PCZmZmKioqHh4dPT0/f39/ExMS3t7eysrJ7e3uurq6oqKi0tLTpSHobAAACMElEQVR42u3V3XKiMACG4XxgtSTyr6KioFbrf9u9/5vbkMjuzlBnHTwoB99z4BAOkpeAIIiIiIiIiIiIiIiIiIiIiIiIiIiIiOhRDjRXaC7QexHfcmH1PdHG84GrU8cDUaiOB/qTu4HW6wAYip/g6LoSyHZ/ApXT8yHfRotGYH3gRtlUbjyxWB+xvSh99rIJJdDPHCW03XULufnqA44eBbNMH62KtHVgPwkhkzrwZQgrnN0LHEyhHd0Qmvylzw5hyXdduPiAZQLVWsI4eq0DZyMgj21goI+niRr3qlN3ArNxMKk2ZanGub2qYhip4JQBYSSC9yr0JVj6JvBTIo+CWEdnu7aBXloCIxuYvgEHJcRyCiT3brHe554t0zGDV3HjmZs63gKbRT2KS+BcrSNxjFoHikQi3JslJ74JEFEIzP8f6N4C08+PgQ/NMTN81bnVb006rQPNejBL6jHcuujBQPucWY6dwQTWo1r7QHtH2+9gIiHnUTwzSfUMXj1qhLUJVAeg8QxeHg2cm9/6GVwBe3UbmfmGSmjx3GsdaHfs339xugHyuPkl+T5wBPQnQbyWVZLamxkWIzMKXAlZxEKdy/5TgTqs+R58NDAKUZEmSczCxnvQeCZQS8vGl+ThQHHqScjD+fbtSOc+/Hni3y49KrYSclvMlOiUBFiNRRd55TUWajkA9h3bM+vvuznv5gaKcbaSgJ9fd4KIiIiIiIiIiIiIiIiIiIiIiIiIiIiI7vgNQVohigyaqrEAAAAASUVORK5CYII="
                        alt="No"
                    />
                    <div onClick={handleFollowed} className={cx('icon-wrapper')}>
                        {followed ? (
                            <FollowedIcon className={cx('followed-icon')} />
                        ) : (
                            <MoreIcon className={cx('more-icon')} />
                        )}
                    </div>
                </span>
            </div>
            <button className={cx('button-items')} onClick={handleLiked}>
                <span className={cx('button-item', { 'button-liked': liked })}>
                    <TymIcon style={{ color: liked ? '(--primary)' : '(--black)' }} />
                </span>
                <strong className={cx('data-video')}>718.2K</strong>
            </button>
            <button className={cx('button-items')}>
                <span className={cx('button-item')}>
                    <CommentIcon />
                </span>
                <strong className={cx('data-video')}>4444</strong>
            </button>
            <button className={cx('button-items')} onClick={handleSaved}>
                <span className={cx('button-item', { 'button-saved': saved })}>
                    <SaveIcon style={{ color: saved ? 'yellow' : '(--black)' }} />
                </span>
                <strong className={cx('data-video')}>10.1K</strong>
            </button>
            <Tippy interactive placement="top-start" render={handleShare}>
                <button className={cx('button-items')}>
                    <span className={cx('button-item')}>
                        <ShareIcon />
                    </span>
                    <strong className={cx('data-video')}>14.0K</strong>
                </button>
            </Tippy>
        </div>
    );
};

export default ButtonsComponent;

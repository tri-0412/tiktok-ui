import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import Styles from './VideoComponents.module.scss';
import ReactPlayer from 'react-player';
import ButtonsComponent from '~/layouts/components/Content/ButtonComponents/ButtonComponents';
const cx = classNames.bind(Styles);

const VideoComponent = () => {
    const videoUrls = [
        'https://www.youtube.com/shorts/EAz03Fwa9hM?feature=share',
        'https://www.youtube.com/shorts/GsW5Nmr7jcw?feature=share',
        'https://www.youtube.com/shorts/E6Brl3DWsEk?feature=share',
    ];

    const handlePlayPause = () => {
        const video = videoUrls.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const handleVolumeToggle = () => {
        const video = videoUrls.current;
        video.muted = !video.muted;
    };

    return (
        <div className={cx('video-container')}>
            {videoUrls.map((url, index) => (
                <div key={index} className={cx('video-card')} width="270px" height="485px">
                    <ReactPlayer className={cx('video')} url={url} width="270px" height="485px" controls />
                    <div className={cx('controls')}>
                        <button onClick={handlePlayPause}></button>
                        <button onClick={handleVolumeToggle}></button>
                        <div className={cx('time-display')}> </div>
                    </div>
                    <ButtonsComponent />
                </div>
            ))}
        </div>
    );
};

export default VideoComponent;

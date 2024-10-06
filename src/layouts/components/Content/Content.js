import Styles from './Content.module.scss';
import classNames from 'classnames/bind';
import VideoComponent from './VideoComponents/VideoComponents';
import DownloadApp from '~/layouts/components/Content/DownloadApp/DownloadApp';

import { useState } from 'react';

const cx = classNames.bind(Styles);

function Content() {
    const [showDownloadApp, setShowDownloadApp] = useState(false);
    const handleDownloadApp = () => {
        setShowDownloadApp(!showDownloadApp);
    };
    return (
        <div className={cx('content-container')} style={{ marginLeft: 270 }}>
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />

            <div className={cx('download-app')}>
                <button onClick={handleDownloadApp} className={cx('button-download-app')}>
                    Tải ứng dụng
                </button>
                {showDownloadApp && <DownloadApp />}
            </div>
        </div>
    );
}

export default Content;

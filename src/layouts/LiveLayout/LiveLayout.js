// src/layouts/LiveLayout.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LiveLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import LiveContent from '../components/LiveContent/LiveContent';

const cx = classNames.bind(styles);
function LiveLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar className={cx('side-bar')} position="fixed" />
                <LiveContent className={cx('content')} />
            </div>
        </div>
    );
}

LiveLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default LiveLayout;

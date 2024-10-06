import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Contacts from '~/components/Contacts';
import React from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Sidebar({ position }) {
    return (
        <aside className={cx('wrapper', { sidebar: true, [position]: true })} style={{ width: 270, height: 520 }}>
            <div className={cx('scroll-sidebar')} style={{ width: 270, height: 520 }}>
                <Menu>
                    <MenuItem
                        title="For Your"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <SuggestedAccounts label="Suggested Accounts" />
                <SuggestedAccounts label="Following Accounts" />
                <Contacts />
            </div>
        </aside>
    );
}
Sidebar.propTypes = {
    position: PropTypes.oneOf(['fixed', 'relative']).isRequired,
};
export default Sidebar;

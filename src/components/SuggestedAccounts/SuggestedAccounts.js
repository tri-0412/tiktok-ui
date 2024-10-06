import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {showAll ? (
                <>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </>
            ) : (
                <>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </>
            )}
            <p className={cx('more-btn')} onClick={handleToggle}>
                {showAll ? 'See All' : 'See Less'}
            </p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;

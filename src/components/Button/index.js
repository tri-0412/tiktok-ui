import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            children,
            outline = false,
            rounded = false,
            text = false,
            primary = false,
            disabled = false,
            small = false,
            large = false,
            className,
            leftIcon,
            rightIcon,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        const Component = to ? Link : href ? 'a' : 'button';

        if (disabled) {
            // Remove event listener for disabled button
            Object.keys(passProps).forEach((key) => {
                if (key.startsWith('on') && typeof passProps[key] === 'function') {
                    delete passProps[key];
                }
            });
        }

        const classes = cx('wrapper', className, {
            primary,
            outline,
            text,
            disabled,
            rounded,
            small,
            large,
        });

        const commonProps = {
            ref,
            className: classes,
            onClick: !disabled ? onClick : undefined,
            ...passProps,
        };
        if (to) {
            commonProps.to = to;
        } else if (href) {
            commonProps.href = href;
        }

        return (
            <Component {...commonProps}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        );
    },
);
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;

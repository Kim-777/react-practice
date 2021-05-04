import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하십니까, 저는 <span className="something">CSS Module!</span>
        </div>
    )
}

export default CSSModule

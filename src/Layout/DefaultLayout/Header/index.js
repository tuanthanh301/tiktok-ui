import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" width="118" height="42" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button>
                        <FontAwesomeIcon className={cx('clear')}icon={faCircleXmark}/>
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')}icon={faSpinner} /> */}
                    <span className={cx('line')}></span>
                    <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
                </div>
                <div className={cx('action')}>action</div>
            </div>
        </header>
    );
};

export default Header;

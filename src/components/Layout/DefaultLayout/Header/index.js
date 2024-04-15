import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" width="118" height="42" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                            ˝
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                        <button>
                            <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                        </button>

                        {/* <FontAwesomeIcon className={cx('loading')}icon={faSpinner} /> */}
                        <span className={cx('line')}></span>
                        <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>UpLoad</Button>
                    <Button rounded rightIcon={<FontAwesomeIcon icon={faSignIn}/>}>Log in</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;

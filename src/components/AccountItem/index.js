import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles);
const AccountItem = () => { 
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')}src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/af6a71141ade157d00ffb117dda8b951~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713319200&x-signature=h0OV14MRgI8uXLx27f4ydccOyYg%3D" alt="Hoa"/>
        <div className={cx('infor')}>
            <h4 className={cx('name')}>
                <span>Nguyễn Tuấn Thành</span>
                <FontAwesomeIcon className={cx('check')}icon={faCheckCircle}/>
            </h4>
            <span className={cx('userName')}>tuanthanh301</span>
        </div>
    </div>
  )
}

export default AccountItem
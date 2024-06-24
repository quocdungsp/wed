import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ, faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NavBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <ul>
                    <li style={{ color: 'rgb(0, 62, 161)' }}>Phổ Biến</li>
                    <li>Bán chạy</li>
                    <li>Hàng mới</li>
                    <li>
                        <FontAwesomeIcon icon={faArrowDownAZ} />
                        <span>Giá</span>
                    </li>
                </ul>
            </div>

            <div className={cx('filter-2')}>
                <ul>
                    <li>
                        <FontAwesomeIcon style={{ color: '#ccc' }} icon={faFilter} />
                        <span> Lọc</span>
                    </li>
                    <li>
                        <img
                            src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

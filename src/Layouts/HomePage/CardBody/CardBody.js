import classNames from 'classnames/bind';
import styles from './CardBody.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CardBody({ item }) {
    const [imagesProducts, setImagesProducts] = useState();

    useEffect(() => {
        item.images.map((item) => setImagesProducts(item.base_url));
    }, [item.images]);

    return (
        <div className={cx('wrapper')}>
            <Link style={{ textDecoration: 'none', color: '#000' }} key={item?.id} to={`/prodetail/${item?.id}`}>
                <img src={imagesProducts} alt="" />
                <div className={cx('info-card')}>
                    <h3>{item?.name}</h3>
                    <div className={cx('star-card')}>
                        <div>
                            <FontAwesomeIcon id={cx('icons-star')} icon={faStar} />
                            <FontAwesomeIcon id={cx('icons-star')} icon={faStar} />
                            <FontAwesomeIcon id={cx('icons-star')} icon={faStar} />
                            <FontAwesomeIcon id={cx('icons-star')} icon={faStar} />
                            <FontAwesomeIcon id={cx('icons-star')} icon={faStar} />
                        </div>
                        <span>Đã bán {item.quantity_sold?.text}</span>
                    </div>
                    <div id={cx('price-card')}>{item?.list_price?.toLocaleString()} đ</div>
                </div>
            </Link>
        </div>
    );
}

export default CardBody;

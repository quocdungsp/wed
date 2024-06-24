import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import request from '../../config/connect';
import ModalPayment from '../../Modal/Modal';
import useDebounce from '../../customHook/useDebounce';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [dataProducts, setDataProducts] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const [dataCart, setDataCart] = useState([]);
    const [show, setShow] = useState(false);
    const debounceValue = useDebounce(valueSearch, 500);

    useEffect(() => {
        setDataCart(JSON.parse(localStorage.getItem('cart')));
    }, []);

    useEffect(() => {
        async function fetchData() {
            const res = await request.get('/api/search', {
                params: { nameProduct: debounceValue },
            });

            setDataProducts(res.data);
        }
        fetchData();
    }, [debounceValue]);

    const handleShowModal = () => {
        setShow(!show);
    };

    const handleDeleteProduct = (id) => {
        let data = localStorage.getItem('cart');
        let dataCart = JSON.parse(data);

        const index = dataCart.findIndex((product) => product.id === id);

        if (index !== -1) {
            dataCart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(dataCart));
        }

        window.location.reload();
    };

    const test = dataCart?.reduce((total, item) => total + item.priceNew * item.valueSpan, 0);

    return (
        <div className={cx('wrapper')}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <div className={cx('logo')}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                        alt=""
                    />
                    <h2>Tốt & Nhanh</h2>
                </div>
            </Link>
            <div className={cx('search')}>
                <FontAwesomeIcon icon={faSearch} id={cx('icon-search')} />
                <input placeholder="100% Hàng tuyển chọn" onChange={(e) => setValueSearch(e.target.value)} />
                <button id={cx('btn-search')}>Tìm Kiếm</button>
                {valueSearch.length > 0 ? (
                    <div className={cx('search-result')}>
                        {dataProducts.map((item) => (
                            <Link
                                style={{ textDecoration: 'none', color: '#000' }}
                                key={item.id}
                                to={`/prodetail/${item.id}`}
                            >
                                {item?.images?.map((item2) => (
                                    <div className={cx('item')}>
                                        <img alt="" src={item2?.base_url} />
                                        <h3>{item?.name}</h3>
                                        <span>{item?.list_price?.toLocaleString()} đ</span>
                                    </div>
                                ))}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className={cx('controller')}>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <li>
                            <FontAwesomeIcon id={cx('icons-li')} icon={faHome} />
                            Trang Chủ
                        </li>
                    </Link>
                    <li>
                        <FontAwesomeIcon id={cx('icons-li')} icon={faFaceSmile} />
                        Tài Khoản
                    </li>
                    <li>
                        <button
                            style={{ border: 'none', background: 'none' }}
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <FontAwesomeIcon id={cx('icons-li')} icon={faCartPlus} />
                        </button>
                    </li>
                </ul>
            </div>
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Giỏ Hàng</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {dataCart?.map((item) => (
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <img style={{ width: '50px' }} src={item.img} alt="" />
                                        </th>
                                        <th scope="col">{item.nameProducts}</th>
                                        <th scope="col">{item.priceNew.toLocaleString()} đ</th>
                                        <th scope="col">{item.valueSpan}</th>
                                        <th scope="col">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteProduct(item.id)}
                                            >
                                                Xóa Sản Phẩm
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    ))}
                    <div className={cx('address')}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Thông Tin Người Nhận
                            </span>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Địa Chỉ Người Nhận
                            </span>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                Số Diện Thoại Người Nhận
                            </span>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <h5>Tổng Tiền :{test?.toLocaleString()} đ</h5>
                    <button onClick={handleShowModal} type="button" className="btn btn-primary">
                        Thanh Toán
                    </button>
                </div>
            </div>
            <ModalPayment show={show} setShow={setShow} dataCart={dataProducts} />
        </div>
    );
}

export default Header;

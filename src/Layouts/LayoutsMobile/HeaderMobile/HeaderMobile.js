import classNames from 'classnames/bind';
import styles from './HeaderMobile.module.scss';
import request from '../../../config/connect';
import useDebounce from '../../../customHook/useDebounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalPayment from '../../../Modal/Modal';

const cx = classNames.bind(styles);

function HeaderMobile() {
    const [valueSearch, setValueSearch] = useState('');
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const [show, setShow] = useState(false);
    const debounceValue = useDebounce(valueSearch, 500);
    const [imagesProducts, setImagesProducts] = useState();

    useEffect(() => {
        setDataCart(JSON.parse(localStorage.getItem('cart')));
    }, []);

    useEffect(() => {
        dataProducts?.map((item) => item?.images?.map((item2) => setImagesProducts(item2)));
    }, [dataProducts]);

    const handleShowModal = () => {
        setShow(!show);
    };
    useEffect(() => {
        if (valueSearch.length > 0) {
            request
                .get('/api/search', {
                    params: { nameProduct: debounceValue },
                })
                .then((res) => setDataProducts(res.data));
        }
    }, [debounceValue]);

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-bars')}>
                <button>
                    <Link to="/">
                        <FontAwesomeIcon style={{ paddingRight: '10px', color: '#fff' }} icon={faChevronLeft} />
                    </Link>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className={cx('search')}>
                <FontAwesomeIcon id={cx('icon-search')} icon={faSearch} />
                <input placeholder="Bạn đang tìm kiếm gì " onChange={(e) => setValueSearch(e.target.value)} />
                {valueSearch.length > 0 ? (
                    <div className={cx('search-result')}>
                        {dataProducts?.map((item) => (
                            <Link
                                style={{ textDecoration: 'none', color: '#000' }}
                                key={item.img}
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
                    <button onClick={handleShowModal} type="button" className="btn btn-primary">
                        Thanh Toán
                    </button>
                </div>
            </div>

            <div>
                <button
                    style={{ border: 'none', background: 'none' }}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <FontAwesomeIcon id={cx('icon-cart')} icon={faCartPlus} />
                </button>
            </div>
            <ModalPayment show={show} setShow={setShow} dataCart={dataProducts} />
        </div>
    );
}

export default HeaderMobile;

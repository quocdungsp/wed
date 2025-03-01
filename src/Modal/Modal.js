import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import request from '../config/connect';

export default function ModalPayment({ show, setShow }) {
    const data = localStorage.getItem('cart');
    const dataCart = JSON.parse(data);
    const handleSuccess = () => {
        toast.success('Thanh Toán Thành Công !!!');
        setTimeout(() => {
            setShow(false);
            localStorage.removeItem('cart');
            window.location.reload();
        }, 1000);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanh Toán Đơn Hàng !!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanh Toán Hóa Đơn
                    {dataCart?.map((item) => (
                        <div key={item.id}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <img style={{ width: '50px' }} src={item?.img} alt="" />
                                        </th>
                                        <th scope="col">{item?.nameProducts}</th>
                                        <th scope="col">{item?.priceNew?.toLocaleString()} đ</th>
                                        <th scope="col">{item?.valueSpan}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSuccess}>
                        Thanh Toán
                    </Button>
                </Modal.Footer>
                <ToastContainer />
            </Modal>
        </>
    );
}

export function ModalAddProduct({ show, setShow }) {
    const [imgProduct, setImgProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');

    const handleAddProduct = () => {
        request
            .post('/api/addproduct', {
                imgProduct,
                nameProduct,
                priceProduct,
            })
            .then((res) => toast.success(res.data.message));
    };

    const handleClose = () => setShow(false);
    return (
        <>
            <ToastContainer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Sản Phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Img
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setImgProduct(e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Name Products
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setNameProduct(e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Price
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setPriceProduct(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Thêm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function ModalDeleteProduct({ show, setShow, idProduct }) {
    const handleDeleteProduct = () => {
        request.post('/api/deleteproduct', { id: idProduct }).then((res) => toast.success(res.data.message));
    };

    const handleClose = () => setShow(false);
    return (
        <>
            <ToastContainer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa Sản Phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa sản phẩm {idProduct} không ? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleDeleteProduct}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('column-1')}>
                    <h4>Hỗ trợ khách hàng</h4>
                    <ul>
                        <li>Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)</li>
                        <li>Các câu hỏi thường gặp</li>
                        <li>Gửi yêu cầu hỗ trợ</li>
                        <li>Hướng dẫn đặt hàng</li>
                        <li>Phương thức vận chuyển</li>
                        <li>Chính sách đổi trả</li>
                        <li>Hướng dẫn trả góp</li>
                        <li>Chính sách hàng nhập khẩu</li>
                        <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
                        <li>Báo lỗi bảo mật: security@tiki.vn</li>
                    </ul>
                </div>

                <div className={cx('column-2')}>
                    <h4>Về Tiki</h4>
                    <ul>
                        <li>Giới thiệu Tiki</li>
                        <li>Tiki Blog</li>
                        <li>Tuyển dụng</li>
                        <li>Chính sách bảo mật thanh toán</li>
                        <li>Chính sách bảo mật thông tin cá nhân</li>
                        <li>Chính sách giải quyết khiếu nại</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Giới thiệu Tiki xu</li>
                        <li>Bán hàng cùng doanh nghiệp</li>
                        <li>Điều kiện vận chuyển</li>
                    </ul>
                </div>

                <div className={cx('column-3')}>
                    <h4>Hợp tác và liên kết</h4>
                    <ul>
                        <li>Quy chế hoạt động sàn GDTMĐT</li>
                        <li>Bán hàng cùng Tiki</li>
                    </ul>
                    <div>
                        <h4>Chứng nhận bởi</h4>
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                            alt=""
                        />
                    </div>
                </div>

                <div className={cx('column-4')}>
                    <h4>Phương thức thanh toán</h4>
                    <h4>Dịch vụ giao hàng</h4>
                </div>

                <div className={cx('column-5')}>
                    <h4>Kết nối với chúng tôi</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <g clipPath="url(#clip0_4_9000)">
                            <path
                                d="M0.5 16.6665C0.5 7.82995 7.66344 0.666504 16.5 0.666504C25.3366 0.666504 32.5 7.82995 32.5 16.6665C32.5 25.5031 25.3366 32.6665 16.5 32.6665C7.66344 32.6665 0.5 25.5031 0.5 16.6665Z"
                                fill="#3B5998"
                            />
                            <path
                                d="M18.1676 26.0742V17.3693H20.5706L20.889 14.3696H18.1676L18.1717 12.8682C18.1717 12.0858 18.2461 11.6666 19.3698 11.6666H20.872V8.6665H18.4687C15.582 8.6665 14.566 10.1217 14.566 12.5689V14.3699H12.7666V17.3696H14.566V26.0742H18.1676Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4_9000">
                                <rect width="32" height="33" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <g clipPath="url(#clip0_4_9003)">
                            <path
                                d="M0.5 16.6665C0.5 7.82995 7.66344 0.666504 16.5 0.666504C25.3366 0.666504 32.5 7.82995 32.5 16.6665C32.5 25.5031 25.3366 32.6665 16.5 32.6665C7.66344 32.6665 0.5 25.5031 0.5 16.6665Z"
                                fill="#FF0000"
                            />
                            <path
                                d="M24.6768 12.7153C24.4805 11.9613 23.9022 11.3675 23.1679 11.166C21.8371 10.7998 16.5001 10.7998 16.5001 10.7998C16.5001 10.7998 11.1632 10.7998 9.8323 11.166C9.09795 11.3675 8.51962 11.9613 8.32335 12.7153C7.9668 14.0818 7.9668 16.9331 7.9668 16.9331C7.9668 16.9331 7.9668 19.7843 8.32335 21.151C8.51962 21.905 9.09795 22.4987 9.8323 22.7003C11.1632 23.0665 16.5001 23.0665 16.5001 23.0665C16.5001 23.0665 21.8371 23.0665 23.1679 22.7003C23.9022 22.4987 24.4805 21.905 24.6768 21.151C25.0335 19.7843 25.0335 16.9331 25.0335 16.9331C25.0335 16.9331 25.0335 14.0818 24.6768 12.7153Z"
                                fill="white"
                            />
                            <path d="M14.8999 19.8665V14.5332L19.1666 17.2L14.8999 19.8665Z" fill="#FF0000" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4_9003">
                                <rect width="32" height="33" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <g clipPath="url(#clip0_4_9007)">
                            <path
                                d="M0.5 16.6665C0.5 7.82995 7.66344 0.666504 16.5 0.666504C25.3366 0.666504 32.5 7.82995 32.5 16.6665C32.5 25.5031 25.3366 32.6665 16.5 32.6665C7.66344 32.6665 0.5 25.5031 0.5 16.6665Z"
                                fill="#3171F6"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.5002 5.99976C10.6091 5.99976 5.8335 10.4555 5.8335 15.9521C5.8335 19.035 7.33597 21.7902 9.69473 23.6157V27.3331L13.3261 25.4564C14.3287 25.7476 15.3948 25.9045 16.5002 25.9045C22.3912 25.9045 27.1668 21.4487 27.1668 15.9521C27.1668 10.4555 22.3912 5.99976 16.5002 5.99976ZM10.377 18.0803C11.1612 18.0803 11.8932 18.0758 12.625 18.082C13.0362 18.0855 13.2584 18.2606 13.2962 18.5844C13.3442 18.9943 13.105 19.2663 12.6609 19.2713C11.8233 19.2808 10.9855 19.2749 10.1477 19.2749C9.90587 19.2749 9.66349 19.2834 9.42244 19.2695C9.12187 19.2522 8.82787 19.1927 8.68415 18.8826C8.54006 18.5718 8.64015 18.2929 8.83911 18.0399C9.63968 17.0218 10.4412 16.0046 11.2422 14.9868C11.2898 14.9264 11.3357 14.8647 11.382 14.8042C11.333 14.7158 11.2554 14.7554 11.1949 14.755C10.6336 14.7515 10.0721 14.7555 9.51082 14.751C9.38254 14.75 9.25044 14.7397 9.12701 14.7073C8.86663 14.639 8.70854 14.4306 8.70644 14.1819C8.70434 13.9328 8.85768 13.7219 9.11749 13.6486C9.24025 13.614 9.37282 13.602 9.50111 13.6015C10.4252 13.5977 11.3493 13.598 12.2734 13.601C12.4367 13.6015 12.6011 13.6057 12.7597 13.6605C13.1101 13.7814 13.2643 14.1044 13.1219 14.4464C12.9978 14.7441 12.8001 14.9972 12.6027 15.2485C11.9252 16.1107 11.2452 16.9708 10.5663 17.8321C10.5136 17.8989 10.4629 17.9675 10.377 18.0803ZM14.5567 17.2471C14.5617 17.4254 14.6205 17.6651 14.7747 17.8731C15.1102 18.3256 15.7984 18.3242 16.1337 17.8722C16.4242 17.4804 16.4227 16.8303 16.1319 16.4388C15.9782 16.232 15.773 16.1237 15.5169 16.1086C14.9487 16.0752 14.5509 16.5147 14.5567 17.2471ZM16.3889 15.3524C16.5151 15.1935 16.6404 15.0438 16.8538 15.0004C17.2609 14.9173 17.647 15.1819 17.6525 15.5959C17.6661 16.6318 17.661 17.6679 17.6549 18.704C17.6532 18.9869 17.4789 19.2038 17.2239 19.2905C16.9567 19.3813 16.6783 19.3151 16.4998 19.0899C16.4124 18.9796 16.375 18.9606 16.2531 19.0595C15.7812 19.4421 15.2489 19.509 14.6735 19.3224C13.7505 19.0229 13.3705 18.3037 13.2703 17.4227C13.1626 16.4765 13.4776 15.6644 14.3246 15.1665C15.0277 14.7531 15.7421 14.7879 16.3889 15.3524ZM21.2838 17.1507C21.2824 17.4159 21.3448 17.6633 21.5047 17.8782C21.8324 18.3188 22.5136 18.3223 22.848 17.8878C23.1494 17.4961 23.1504 16.8304 22.853 16.4345C22.6979 16.2281 22.4918 16.1216 22.2364 16.1081C21.6766 16.0784 21.2862 16.5064 21.2838 17.1507ZM19.9806 17.2759C19.9411 15.9451 20.8142 14.9508 22.056 14.9126C23.3756 14.872 24.3436 15.7593 24.383 17.0528C24.4229 18.3625 23.6194 19.2916 22.3803 19.4159C21.0341 19.5508 19.9614 18.5699 19.9806 17.2759ZM19.5266 16.2454C19.5266 17.0483 19.5306 17.8512 19.525 18.6541C19.5218 19.1133 19.1166 19.4238 18.6809 19.3138C18.4192 19.2478 18.2236 18.9702 18.2231 18.6467C18.2211 17.274 18.2223 15.9013 18.2223 14.5286C18.2223 14.2869 18.2189 14.045 18.2231 13.8034C18.2301 13.405 18.4837 13.1464 18.8649 13.1427C19.2586 13.1388 19.5226 13.3984 19.5252 13.8109C19.5302 14.6224 19.5266 15.4339 19.5266 16.2454Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4_9007">
                                <rect width="32" height="33" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Footer;

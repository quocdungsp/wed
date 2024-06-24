import classNames from 'classnames/bind';
import styles from './LayoutsMobile.module.scss';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HomePageMobile from './HomePageMobile/HomePageMobile';
import NavBar from './NavBar/NavBar';

const cx = classNames.bind(styles);

function LayoutsMobile() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <HeaderMobile />
            </header>

            <div>
                <NavBar />
            </div>

            <main className={cx('home-page-mobile')}>
                <HomePageMobile />
            </main>
        </div>
    );
}

export default LayoutsMobile;

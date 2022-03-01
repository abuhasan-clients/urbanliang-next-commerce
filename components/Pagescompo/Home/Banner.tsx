import styles from '../../../styles/Home/Banner.module.scss';

const Banner = () => {
    return (
        <div className={`${styles.banner_wrapper} mb-20`}>
            <div className={`${styles.img_parent}`}>
                <div className={`${styles.banner_layer}`} />
                <img src="https://i.ibb.co/zQPHsjq/addams-polar-bear-rug-1.jpg" alt="" />
                <div className={`flex flex-col items-center justify-center w-full ${styles.banner_info}`}>
                    <i className="fa-solid fa-heart-pulse" />
                    <h1>OUR BEST, CHOSEN BY YOU</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;

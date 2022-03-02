import styles from '../../styles/Reuseable/Banner.module.scss';

const Banner = ({ layer, images, defaultInfo, title, icon }: any) => {
    return (
        <div className={`${styles.banner_wrapper} mb-20`}>
            <div className={`${styles.img_parent}`}>
                {layer && <div className={`${styles.banner_layer}`} />}
                {images && <img src={images} alt="" />}
                {defaultInfo && (
                    <div className={`flex flex-col items-center justify-center w-full ${styles.banner_info}`}>
                        <i className={`${icon}`} />
                        <h1>{title}</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;

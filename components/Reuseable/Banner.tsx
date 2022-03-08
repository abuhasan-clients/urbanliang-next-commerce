import styles from '../../styles/Reuseable/Banner.module.scss';

const Banner = ({ layer, image, defaultInfo, rightInfo, defaultClasses, desc, icon, title }: any) => {
    return (
        <div className={`relative ${styles.banner_wrapper} mb-20`}>
            <div className={`${styles.img_parent}`}>
                {layer && <div className={`${styles.banner_layer}`} />}
                {image && <img src={image} alt="" />}
                {defaultInfo && (
                    <div className={`${styles.banner_info} ${defaultClasses}`}>
                        <i className={`${icon}`} />
                        {title}
                    </div>
                )}
                {rightInfo && (
                    <div className={`${styles.banner_info} ${defaultClasses}`}>
                        {title}
                        {desc}
                        <i className={`${icon}`} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;

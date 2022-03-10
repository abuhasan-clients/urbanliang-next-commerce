import styles from '../../styles/Reuseable/Banner.module.scss';

const Banner = ({ image, desc, textColor, title, icon }: any) => {
    // layer, defaultInfo, rightInfo, defaultClasses, icon

    return (
        <div className="relative overflow-hidden w-full" id={styles.bannerMain}>
            <img className="object-cover w-full " src={image} alt="Flower and sky" />
            <div className="absolute pt-12  px-6 py-4" id={styles.mainClass}>
                <div className={`mb-3 sm:text-4xl tracking-tight ${textColor}`}>{title}</div>
                <div className={`leading-normal ${textColor}`}>{desc}</div>
                <img className={`${styles.banner_icon}`} src={`${icon}`} alt="" />
            </div>
        </div>
    );
};

export default Banner;

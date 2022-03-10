import styles from '../../styles/Reuseable/Banner.module.scss';

const BannerForCenter = ({ image, desc, textColor, title }: any) => {
    // layer, defaultInfo, rightInfo, defaultClasses, icon

    return (
        <div className="relative overflow-hidden w-full" id={styles.bannerMain}>
            <img className="object-cover w-full " src={image} alt="Flower and sky" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 " id={styles.mainClassForCenter}>
                <div className={`mb-3 sm:text-4xl  xl:text-8xl md:text-8xl tracking-tight ${textColor}`}>{title}</div>
                <div className={`leading-normal ${textColor}`}>{desc}</div>
            </div>
        </div>
    );
};

export default BannerForCenter;

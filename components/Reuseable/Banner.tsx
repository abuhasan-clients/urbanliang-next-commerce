import styles from '../../styles/Reuseable/Banner.module.scss';

const Banner = ({ image, desc, textColor, title }: any) => {
    // layer, defaultInfo, rightInfo, defaultClasses, icon

    return (
        <div className="relative overflow-hidden  " id={styles.bannerMain}>
            <img className="object-cover w-full " src={image} alt="Flower and sky" />
            <div className="absolute pt-12  px-6 py-4" id={styles.mainClass}>
                <h4 className={`mb-3 sm:text-4xl  xl:text-8xl md:text-8xl  font-semibold tracking-tight ${textColor}`}>{title}</h4>
                <p className={`leading-normal ${textColor}`}>{desc}</p>
            </div>
        </div>
    );
};

export default Banner;

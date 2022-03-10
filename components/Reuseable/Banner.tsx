import styles from '../../styles/Reuseable/Banner.module.scss';
const Banner = ({ layer, image, defaultInfo, rightInfo, defaultClasses, desc, icon, title }: any) => {
    return (
        <div className="relative overflow-hidden  " id={styles.bannerMain}>
            <img className="object-cover w-full " src={image} alt="Flower and sky" />
            <div className="absolute      pt-12  px-6 py-4" id={styles.mainClass}>
                <h4 className="mb-3 sm:text-4xl  xl:text-8xl md:text-8xl  font-semibold tracking-tight text-white">{title}</h4>
                <p className="leading-normal text-gray-100">{desc}</p>
                <img src={icon} alt="" />
            </div>
        </div>
    );
};

export default Banner;

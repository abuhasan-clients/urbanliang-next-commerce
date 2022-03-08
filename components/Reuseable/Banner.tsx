const Banner = ({ className1, className2, images, title1, title2, icon, description, desClassName, mainClassName }: any) => {
    return (
        <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-1    mb-8 ">
            <div className="relative  cursor-pointer">
                <div className=" overflow-hidden imgReSize">
                    <img className="object-cover w-full " src={images} alt="Flower and sky" />
                </div>

                <div className={`${mainClassName}`}>
                    <h1 className={`${className1}`}>{title1} </h1>
                    <h1 className={`${className2}`}>{title2}</h1>
                    <p className={`${desClassName}`}>
                        It is a long established fact that a reader will be distracted by <br /> the readable content of a page when
                        <br />
                        It is a long established fact that a readerof a page when
                    </p>
                </div>
            </div>
        </div>
        // <div className={`${styles.banner_wrapper} mb-20`}>
        //     <div className={`${styles.img_parent}`}>
        //         {layer && <div className={`${styles.banner_layer}`} />}
        //         {images && <img src={images} alt="" />}
        //         {defaultInfo && (
        //             <div className={`${classNam} ${styles.banner_info}`}>
        //                 <i className={`${icon}`} />
        //                 <h1>{title}</h1>
        //                 <p className={`${desClass}`}>{description}</p>
        //             </div>
        //         )}
        //     </div>
        // </div>
    );
};

export default Banner;

import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed flex justify-center items-center w-screen h-screen text-center loading top-0 left-0"
            style={{ backgroundColor: '#0008', color: '#fff', zIndex: 200 }}
        >
            <svg width="200" height="200" viewBox="0 0 40 60">
                <polygon id="loader_triangle" fill="none" stroke="#fff" strokeWidth="1" points="16,1 32,32 1,32" />
                <text className="loader_loading_text" x="0" y="45" fill="#fff">
                    Loading...
                </text>
            </svg>
        </motion.div>
    );
};

export default Loader;

import image from "../../assets/tnvr.png";
import scrollImage from "../../assets/scroll.png";
import { motion } from "framer-motion";

const variants = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, staggerChildren: 0.5 } },
    scrollVisible: { y: 10, opacity: 0, transition: { duration: 2, repeat: Infinity } }
}


const Hero = () => {
    return (
        <div className={`h-[89vh] overflow-x-hidden overflow-y-hidden flex justify-center items-center relative w-full bg-gradient-to-b from-[#0c0c1d] to-[#111132]`}>
            <div className="flex max-md:flex-col-reverse max-md:items-center md:w-full lg:w-[90%] ">
                <div className="w-full md:w-[50%] max-md:h-[44vh] flex items-center justify-center">
                    <motion.div variants={variants} initial="hidden" animate="visible" className="flex flex-col justify-center gap-y-5 lg:gap-y-8 w-[70%]">
                        <motion.p variants={variants} className="text-2xl md:text-4xl font-semibold text-white text-center md:text-start font-[Poppins] ">Tanvir Ahmed</motion.p>
                        <motion.p variants={variants} className="text-4xl md:text-7xl font-semibold text-white text-center md:text-start font-[Poppins] ">MERN Stack Developer</motion.p>
                        <motion.div variants={variants} className="flex max-md:flex-col gap-y-3 md:gap-x-6 items-center">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="px-4 py-1.5 rounded-md bg-transparent border border-white text-white text-md font-medium">See my latest works</motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="px-4 py-1.5 rounded-md bg-white text-black text-md font-medium">Contact me</motion.button>
                        </motion.div>
                        <motion.div variants={variants} animate="scrollVisible" className="cursor-pointer flex justify-center md:block">
                            <img src={scrollImage} alt="" className="w-10 md:w-12" />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full md:w-[50%] md:h-full h-[350px] overflow-hidden b">
                    <div className=' flex justify-center lg:items-end md:items-center items-start w-full overflow-hidden h-[500px] md:h-[700px] lg:h-[800px] xl:h-[700px]'>
                        <img src={image} alt="" className='lg:h-[90%] md:h-[85%] mt-0 md:mt-28 lg:mt-0 h-[400px]' />
                    </div>
                </div>
            </div>
            <motion.p initial={{ x: 0 }} animate={{ x: "-240%" }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }} className="absolute w-[50%] -bottom-8 font-semibold text-[15vh] md:text-[30vh] text-[#ffffff09] whitespace-nowrap">
                React js and Next js developer
            </motion.p>
        </div>
    );
};

export default Hero;
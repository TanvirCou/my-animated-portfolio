import image from "../../assets/tnvr.png";
import scrollImage from "../../assets/scroll.png";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import resume from "../../assets/Kazi_Tanvir_Ahmed.pdf";

const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, staggerChildren: 0.5 } },
    scrollVisible: { y: 10, opacity: 0, transition: { duration: 2, repeat: Infinity } }
}

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const Hero = () => {

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(145% 145% at 50% 0%, #0c0c1d 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.div style={{ backgroundImage }} className={`h-[91vh] md:h-[89vh] overflow-x-hidden overflow-y-hidden flex justify-center items-center relative w-full`}>
            <div className="flex max-md:flex-col-reverse max-md:items-center md:w-full lg:w-[90%] ">
                <div className="w-full md:w-[50%] max-md:h-[44vh] flex items-center justify-center">
                    <motion.div variants={variants} initial="hidden" animate="visible" className="flex flex-col justify-center gap-y-5 lg:gap-y-8 w-[70%]">
                        <motion.p variants={variants} className="text-2xl md:text-4xl font-semibold text-white text-center md:text-start font-[Poppins] ">Kazi Tanvir Ahmed</motion.p>
                        <motion.p variants={variants} className="text-4xl md:text-7xl font-semibold text-white text-center md:text-start font-[Poppins] ">Frontend Developer</motion.p>
                        <motion.div variants={variants} className="flex max-md:flex-col gap-y-3 md:gap-x-6 items-center">
                            <motion.a href={resume} target="_blank" rel="noopener noreferrer" style={{ border, boxShadow }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="cursor pointer px-4 py-1.5 rounded-md bg-transparent border border-white text-white text-md font-medium">Get Resume</motion.a>
                            <motion.a href="/#contact" style={{ border, boxShadow }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="cursor pointer px-4 py-1.5 rounded-md border border-white text-white text-md font-medium">Contact me</motion.a>
                        </motion.div>
                        <motion.div variants={variants} animate="scrollVisible" className="cursor-pointer flex justify-center md:block">
                            <img src={scrollImage} alt="" className="w-10 md:w-12" />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full md:w-[50%] md:h-full h-[350px] overflow-hidden b">
                    <div className=' flex justify-center lg:items-end md:items-center items-start w-full overflow-hidden h-[500px] md:h-[700px] lg:h-[800px] xl:h-[700px]'>
                        <img src={image} alt="" className='lg:h-[88%] md:h-[85%] mt-0 md:mt-28 lg:mt-0 h-[400px]' />
                    </div>
                </div>
            </div>
            {/* <motion.p initial={{ x: 0 }} animate={{ x: "-240%" }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }} className="absolute w-[50%] -bottom-2 md:-bottom-8 font-semibold text-[10vh] md:text-[22vh] text-[#ffffff09] whitespace-nowrap">
                React js and Next js developer
            </motion.p> */}
        </motion.div>
    );
};

export default Hero;
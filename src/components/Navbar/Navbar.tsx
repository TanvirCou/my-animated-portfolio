import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
}

const Navbar = () => {
    const socialData = [
        {
            id: "Linkedin",
            Logo: FaLinkedin,
            link: "https://www.linkedin.com/in/tnvr-kazi/",
        },
        {
            id: "github",
            Logo: FaGithub,
            link: "https://github.com/TanvirCou",
        },
        {
            id: "fb",
            Logo: FaFacebook,
            link: "https://www.facebook.com/ahmed.tnvr.999",
        },
        {
            id: "instagram",
            Logo: FaInstagram,
            link: "https://www.instagram.com/tnvr_ahmed",
        },
    ]

    return (
        <div className='shadow-lg w-full static top-0 left-0'>
            <div className="flex justify-center items-center h-[9vh] md:h-[11vh]">

                <div className="w-[12%] md:w-[8%] flex items-center z-[999]">
                    <Sidebar />
                </div>

                <div className='flex items-center justify-between w-[88%] md:w-[92%] bg-inherit md:px-20 px-6 '>
                    <motion.div variants={variants} initial="hidden" animate="visible" className='font-bold text-lg md:text-xl cursor-pointer items-center font-[Poppins] 
      text-[lightgray]'>
                        Tanvir
                    </motion.div>

                    <div className="flex items-center gap-x-3 md:gap-x-6 ">
                        {socialData.map(data => (
                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} type='button' href={data.link} target='_blank' rel="noreferrer" key={data.id} className='md:text-xl text-lg'>
                                <data.Logo color="white" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
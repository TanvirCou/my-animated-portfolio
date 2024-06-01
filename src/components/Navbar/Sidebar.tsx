import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
}

const divVariants = {
    hidden: { x: -500 },
    visible: { x: 0, transition: { duration: 0.5, delay: 0.25, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1, } },
    exit: { x: -500, transition: { duration: 0.25, ease: "easeIn", when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } }
}

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75, } },
    exit: { opacity: 0, transition: { duration: 0.25 } }
}

const crossVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } }
}


const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const items = ["Homepage", "Skill", "Portfolio", "Contact"]
    items.map(i => console.log(i));


    return (
        <div className='w-full relative'>
            <AnimatePresence>
                {!open &&
                    <motion.button variants={buttonVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial="hidden" animate="visible" exit="exit" onClick={() => setOpen(true)} className='bg-white p-3 md:p-4 fixed top-[15px] md:top-2 left-1.5 md:left-3 rounded-full'>
                        <RxHamburgerMenu color='black' size={22} />
                    </motion.button>}
            </AnimatePresence>
            <AnimatePresence>
                {
                    open &&
                    <motion.div variants={divVariants} initial="hidden" animate="visible" exit="exit" className='w-[55%] md:w-[35%] xl:w-[20%] h-screen top-0 left-0 bottom-0 fixed flex items-center justify-center bg-white'>
                        <div>
                            {items.map((i, index) => (
                                <motion.div onClick={() => setOpen(false)} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index} className='text-black text-lg font-semibold cursor-pointer text-center py-2'>
                                    <a href={`/#${i}`}>{i}</a>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div variants={crossVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='absolute top-3 left-3 ' onClick={() => setOpen(false)}>
                            <RxCross2 size={22} color='black' className='cursor-pointer' />
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default Sidebar;
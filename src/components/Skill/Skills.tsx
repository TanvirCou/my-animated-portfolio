import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut", staggerChildren: 0.2 } }
}

const Skills = () => {
    return (
        <div className="overflow-hidden w-full h-screen">
            <motion.div initial={{ x: 500, opacity: 0 }} transition={{ duration: 1 }} whileInView={{ x: 0, opacity: 1 }} className='flex items-center justify-end pt-6 '>
                <p className='text-xl md:text-3xl font-semibold mr-2 text-gray-300'>Skills</p>
                <hr className='w-[40%] md:w-[30%] border-top-1 border-gray-400' />
            </motion.div>

            <div className="flex justify-center w-full items-center mt-16">
                <motion.div variants={variants} initial="hidden" whileInView="visible" className="w-[90%] flex flex-wrap justify-center items-center gap-4">
                    {
                        skills.map((skill, index) => (
                            <motion.div variants={variants} key={index} className="w-[45%] md:w-[20%] h-[9vh] md:h-[15vh] flex flex-col justify-center items-center border rounded-full hover:border-[orange] hover:text-[orange]">
                                <p className="text-lg md:text-xl font-medium">{skill.name}</p>
                                <p className="text-sm font-medium mt-0.5">{skill.level}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
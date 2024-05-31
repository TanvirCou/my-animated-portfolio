import { useRef } from "react";
import mountainImage from "../../assets/mountains.png";
import starImage from "../../assets/stars.png";
import sunImage from "../../assets/sun.png";
import planetImage from "../../assets//planets.png";
import { motion, useScroll, useTransform } from "framer-motion";

type TypeProps = {
    type: string
}

const Parallax = ({ type }: TypeProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const textTransform = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
    const planeTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const starTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div ref={ref} id="id" className={`${type === "skill" ? "bg-gradient-to-b from-[#111132] to-[#0c0c1d]" : "bg-gradient-to-b from-[#111132] to-[#505064]"} w-full h-full relative flex justify-center items-center overflow-hidden`}>
            <motion.p style={{ y: textTransform }} className='text-2xl md:text-4xl font-semibold'>{type === "skill" ? "Which Skill I Have?" : "What I did?"}</motion.p>
            <div style={{ backgroundImage: `url("${mountainImage}")` }} className={`bg-bottom bg-contain md:bg-cover bg-no-repeat h-[100%] w-[100%] absolute z-30`}></div>
            <motion.div style={{ backgroundImage: `url("${type === "skill" ? planetImage : sunImage}")`, y: planeTransform }} className={`bg-top md:bg-bottom bg-contain md:bg-cover bg-no-repeat h-[100%] w-[180%] md:w-[100%] absolute z-20`}></motion.div>
            <motion.div style={{ backgroundImage: `url("${starImage}")`, x: starTransform }} className={`bg-bottom h-[100%] w-[100%] absolute z-10`}></motion.div>
        </div>
    );
};

export default Parallax;
import { useRef } from "react";
import { featuredData } from "../../data/data";
import SingleWork from "./SingleWork";
import { useScroll, useSpring, motion } from "framer-motion";

const Portfolio = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    return (
        <div ref={ref} id="portfolio">
            <div className="sticky top-0 pt-12 left-0 text-center w-full  text-[orange]">
                <p className="text-3xl font-semibold">Featured Works</p>
                <motion.div style={{ scaleX }} className="h-2 mt-2 bg-white mx-3 rounded-md"></motion.div>
            </div>
            <div >
                {
                    featuredData.map(data => <SingleWork key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Portfolio;
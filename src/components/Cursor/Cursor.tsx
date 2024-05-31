import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);


    return (
        <motion.div animate={{ x: position.x + 10, y: position.y + 10 }} transition={{ duration: 0.5 }} className='z-[999] hidden lg:block fixed w-[50px] h-[50px] rounded-full border border-white border-solid'>

        </motion.div>
    );
};

export default Cursor;
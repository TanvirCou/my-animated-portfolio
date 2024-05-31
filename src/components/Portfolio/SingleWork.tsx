import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

type DataProps = {
    data: {
        id: number;
        title: string;
        desc: string;
        githubClient: string;
        liveLink: string;
        img: string;
        githubServer?: undefined;
    } | {
        id: number;
        title: string;
        desc: string;
        githubClient: string;
        githubServer: string;
        liveLink: string;
        img: string;
    }
};

const SingleWork = ({ data }: DataProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <div className="h-screen snap-center w-full flex items-center justify-center">
            <div className='flex max-md:flex-col gap-y-10 w-[90%] sm:w-[70%] md:w-[90%]  xl:w-[80%] items-center justify-center md:gap-x-8'>
                <div className='w-full md:w-[55%]'>
                    <div className='w-full h-[30vh] md:h-[50vh]' ref={ref}>
                        <img src={data.img} alt="" className='w-full h-full object-fill rounded' />
                    </div>

                </div>
                <motion.div className='w-[40%] max-md:hidden flex flex-col gap-y-4' style={{ y }} transition={{ duration: 1 }}>
                    <p className='text-xl font-semibold'>{data.title}</p>
                    <p className='text-sm text-gray-400'>{data.desc}</p>
                    <a href={data.liveLink} className='bg-[orange] text-white px-4 py-1.5 rounded-md font-medium cursor-pointer w-fit'>Live Link</a>
                </motion.div>

                <div className='w-full md:w-[40%] md:hidden flex flex-col items-center gap-y-4'>
                    <p className='text-xl font-semibold'>{data.title}</p>
                    <p className='text-sm text-gray-400 text-center'>{data.desc}</p>
                    <a href={data.liveLink} className='bg-[orange] text-white px-4 py-1.5 rounded-md font-medium cursor-pointer w-fit'>Live Link</a>
                </div>
            </div>
        </div>
    );
};

export default SingleWork;
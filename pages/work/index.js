// components
import WorkSlider from '../../components/WorkSlider'
import BUlb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles></Circles>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8' >
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0' >
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-12'>Our Work <span className='text-accent' >.</span> </motion.h2>
            <motion.p variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>At Gray Hut Consulting Inc., we take pride in delivering high-impact digital solutions that drive real results. Our portfolio showcases a diverse range of completed projects, from sleek, responsive websites to compelling branding and successful digital marketing campaigns. Each project reflects our commitment to innovation, functionality, and client satisfaction. Explore our work to see how we’ve helped businesses—from startups to established brands—enhance their online presence, engage their audience, and achieve their goals. Let our success stories inspire yours!</motion.p>
          </div>
          {/* slider */}
          <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]' >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <BUlb></BUlb>
    </div>
  );
};

export default Work;

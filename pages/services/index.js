// components
import ServiceSlider from '../../components/ServiceSlider'
import BUlb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles></Circles>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8' >
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0' >
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8'>Our Services <span className='text-accent' >.</span> </motion.h2>
            <motion.p variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>At Gray Hut Consulting Inc., we offer comprehensive digital solutions tailored to your business needs. Our services include custom web development for seamless, responsive websites, creative design that enhances user experience and brand identity, and strategic digital marketing to boost visibility and engagement. From SEO and social media management to targeted ad campaigns, we help you reach the right audience and achieve measurable growth. Whether you need a new website, a design refresh, or a data-driven marketing strategy, our expert team delivers innovative solutions to elevate your online presence.</motion.p>
          </div>
          {/* slider */}
          <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]' >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <BUlb></BUlb>
    </div>
  );
};

export default Services;

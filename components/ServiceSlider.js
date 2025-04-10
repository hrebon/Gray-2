import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCode,
  RxArrowTopRight
} from "react-icons/rx";

import { FaVideo } from 'react-icons/fa'; 

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'We help create a unique and memorable brand identity for your business, including logo design, brand guidelines, and visual elements that stand out.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Our design team crafts engaging and user-friendly interfaces for websites and apps, focusing on delivering a seamless user experience with visually appealing designs.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'We provide end-to-end development services, from custom software and web applications to mobile app development, tailored to meet the unique needs of your business.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Our expert writers create compelling and optimized content for websites, blogs, and digital marketing campaigns that engage your audience and improve search rankings.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'We offer comprehensive SEO services, including on-page and off-page optimization, keyword research, and content strategy, to increase your online visibility and drive more traffic.',
  },
  {
    icon: <RxCode />,
    title: 'Software Development',
    description: 'Our skilled developers build custom software solutions to address specific business challenges, ensuring that your application is scalable, secure, and efficient.',
  },
  {
    icon: <FaVideo />, // Use this if RxVideo doesn't exist
    title: 'Video Editing',
    description: 'Professional video editing services for ads, corporate videos, and promotional content with smooth transitions and engaging visuals.',
  },
];

//import required modules
import { FreeMode, Pagination } from 'swiper'

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode,Pagination]} // Fixed: should be an array, not an object
    className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4" >{item.icon}</div>
                {/* title & desc */}
                <div className="mb-8" >
                  <div className="mb-2 text-lg" >{item.title}</div>
                  <p className="max-w-[350px] leading-normal " >{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover::text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      Service Slider
    </Swiper>
  );
};

export default ServiceSlider;

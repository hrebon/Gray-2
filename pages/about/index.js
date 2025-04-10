// icons
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeforeffect,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { id: 1, component: <FaHtml5 key="html" /> },
          { id: 2, component: <FaCss3 key="css" /> },
          { id: 3, component: <FaJs key="js" /> },
          { id: 4, component: <FaReact key="react" /> },
          { id: 5, component: <SiNextdotjs key="nextjs" /> },
          { id: 6, component: <SiFramer key="framer" /> },
          { id: 7, component: <FaWordpress key="wordpress" /> },
        ],
      },
      {
        title: "Video Editing",
        icons: [
          { id: 1, component: <SiAdobephotoshop key="photoshop" /> },
          { id: 2, component: <SiAdobepremierepro key="premiere" /> },
          
        ],
      },
      
      {
        title: "UI/UX Design",
        icons: [
          { id: 1, component: <FaFigma key="figma" /> },
          { id: 2, component: <SiAdobexd key="adobexd" /> },
          { id: 3, component: <SiAdobephotoshop key="photoshop" /> },
        ],
      },
      
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     { id: 1, title: "Webby Awards - Honoree", stage: "2011 - 2012" },
  //     { id: 2, title: "Adobe Design Achievement Awards - Finalist", stage: "2009 - 2010" },
  //   ],
  // },
  {
    title: "experience",
    info: [
      { id: 1, title: "UX/UI Designer",  },
      { id: 2, title: "Web Developer",  },
      { id: 4, title: "Softwer Developer", },
      { id: 5, title: "Digital Markter", },
      { id: 6, title: "Video Editor", },
    ],
  },
  {
    title: "credentials",
    info: [
      { id: 1, title: "Web Development ", stage: "" },
      { id: 2, title: "Computer Science Diploma", stage: "" },
      { id: 3, title: "Certified Graphic Designer", stage: "" },
    ],
  },

];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            About <span className="text-accent">US</span>

          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Gray Hut Consulting Inc. is a digital solutions company specializing in web development, innovative design, and strategic digital marketing. We help businesses of all sizes establish a powerful online presence through custom websites, user-centric designs, and data-driven marketing campaigns. Our team of experts combines creativity with cutting-edge technology to deliver tailored solutions that drive growth, engagement, and measurable results. Whether you are a startup looking to launch your brand or an established company aiming to scale, Gray Hut Consulting is your trusted partner for turning digital visions into reality. Based in Canada but serving clients globally, we are committed to excellence, transparency, and client success in every project we undertake.  </p>

          {/* counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {[
                { end: 3, label: "Years of experience" },
                { end: 15, label: "Satisfied clients" },
                { end: 70, label: "Finished Projects" },
                // { end: 0, label: "Winning awards" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={item.end} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0  `}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item) => (
              <div
                key={item.id}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-4 items-center "
              >
                <div className="font-light mb-2 md:mb-0 text-white">{item.title}</div>
                {item.stage && <div className="hidden md:flex text-white">-</div>}
                {item.stage && <div className="text-white">{item.stage}</div>}

                <div className="flex gap-x-4 mt-4 md:mt-0">
                  {item.icons?.map((icon) => (
                    <div key={icon.id} className="text-2xl text-white">
                      {icon.component}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

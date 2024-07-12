import React from "react";
import { styles } from "src/styles";
import { textVariants, fadeIn } from "src/utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "src/hoc";
import web from "src/assets/web.png";
import mobile from "src/assets/mobile.png";
import backend from "src/assets/backend.png";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariants()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {[
          { title: "Web Development", icon: web },
          { title: "React Native Development", icon: mobile },
          { title: "Backend Development", icon: backend },
          // { title: "UI/UX Design", icon: "" },
        ].map((item, index) => (
          <ServiceCard
            index={index}
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { SectionWrapper } from "src/hoc";
import { styles } from "src/styles";
import { textVariants } from "src/utils/motion";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "src/constants";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariants()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20">
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={`${exp.title}-${index}`}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={exp.icon}
                    alt={exp.companyName}
                    className="w-[100%] h-[100%] object-contain rounded-full"
                  />
                </div>
              }
              iconBgStyle={{
                background: exp.iconBg,
                color: "#fff",
                borderRadius: "50%",
              }}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={exp.date}
              dateClassName="mx-2"
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {exp.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {exp.companyName}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {exp.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");

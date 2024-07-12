import React from "react";
import { technologies } from "src/constants";
import { SectionWrapper } from "src/hoc";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={`${tech.name}-${index}`}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

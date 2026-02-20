import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://i.ibb.co/NS0xtJ7/jjp.jpg"
              alt="John Pratheep"
              className="p-12 mt-3 w-70 h-70 transform translate-y-[-12%]"
              title="John Pratheep"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              John Pratheep
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I am an aspiring MERN stack developer passionate about building
              high-quality, scalable web applications that meet user and
              business needs. Through hands-on project experience during my
              learning program at NxtWave, I have developed strong skills in
              React.js, JavaScript, MongoDB, Express.js,HTML, CSS, Python,
              SQLite and Node.js. I focus on creating efficient, robust, and
              user-friendly applications while continuously improving my
              technical expertise.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>John Pratheep
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>8220524850
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                pratheepjohn5@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                Nagercoil,TN
              </h2>
              <div className="about-cont">
                <a
                  href="https://drive.google.com/file/d/1iYaiJZQFdRxLOrlD1TgYKkYvdCPjSWL8/view?usp=drive_link"
                  target="blank"
                >
                  <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                    <button className="primary-button">
                      <span>My Resume</span>
                      <span>
                        <FaDownload />
                      </span>
                    </button>
                  </div>
                </a>

                <a
                  href="https://certificates.ccbp.in/intensive/irc?id=QYJC3MGG3O"
                  target="blank"
                >
                  <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                    <button className="primary-button">
                      <span>IRC </span>
                      <span>
                        <FaDownload />
                      </span>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;

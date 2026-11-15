"use client";
import { easeInOut, motion } from "motion/react";
import TextType from "./TextType";

const Home = () => {
  return (
    <div className="w-full pt-15 md:pt-20 mb-30 px-3 block" id="home">
      <div className="w-full h-[30vh] flex flex-col gap-2 md:gap-5 items-center justify-center">
        <motion.h2 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl md:text-5xl font-bold p-5 shadow-sm shadow-blue-400 rounded-lg text-center  bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500">
          Welcome To Hunt AI
        </motion.h2>

        <TextType
          className="text-lg md:text-2xl font-medium text-blue-600 mx-auto flex items-center justify-center px-8 max-w-3/5"
          text={[
            "Turn your resume into a stronger match for the jobs you want.",
            "Paste your resume, add a job posting, and get AI-powered feedback on what matches",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          deleteMode="backspace"
          typeEffect="none"
          mistakes={0}
          cursorStyle="underscore"
          cursorGlide
          showCursor
          cursorColor="currentColor"
          prefixColor="currentColor"
          cursorBlinkDuration={0.5}
          cursorCharacter="_"
          prefix=""
        />
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-15 md:gap-0 items-center mt-20 px-10">
        <motion.div className=" shadow-md shadow-blue-500 rotate-25 rounded-lg w-1/3" layout  animate={{scale: 1.02}} transition={{duration: 1, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}>
          <p className="text-xs md:text-lg font-medium text-gray-600 px-3 py-2 text-center">
            Upload your resume and a job description. Our AI highlights your
            strengths, spots missing skills, and suggests improvements to help
            you stand out.
          </p>
        </motion.div>

        <motion.div className=" shadow-md shadow-blue-500 rotate-340 rounded-lg w-1/3" layout animate={{scale: 1.02}} transition={{duration: 1, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}>
          <p className="text-xs md:text-lg font-medium text-gray-600 px-3 py-2 text-center">
            Paste your resume, add a job posting, and get AI-powered feedback on
            what matches, what’s missing, and how to improve your chances.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

"use client"

import React from 'react'
import { motion } from "motion/react";

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share your resume',
      description: 'Upload your resume or paste its text to give the analyzer a clear picture of your experience and skills.',
    },
    {
      number: '02',
      title: 'Choose a job',
      description: 'Add the job description you have in mind so your feedback is focused on the role you want.',
    },
    {
      number: '03',
      title: 'Get focused feedback',
      description: 'Review your matching strengths, skills to highlight, and practical suggestions for improving your resume.',
    },
  ]

  return (
    <motion.div className="pt-13 pb-10 w-full" id="how-it-works" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <div className="w-full h-[20vh] flex flex-col gap-2 md:gap-5 items-center justify-center">
        <motion.h2 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl md:text-5xl font-bold p-5 shadow-sm shadow-blue-400 rounded-lg text-center  bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500">
          Here's How It Works
        </motion.h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } }}
              whileHover={{scale: 1.02, y: -6, transition: {duration: 0.3}}}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-blue-500">STEP {step.number}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{step.description}</p>
            </motion.article>
          ))}
        </div>
    </motion.div>
  )
}

export default HowItWorks
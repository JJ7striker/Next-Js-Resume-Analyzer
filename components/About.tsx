"use client"

import { motion } from 'motion/react'

const About = () => {
  return (
    <section id="about" className="w-full px-5 mt-40 mb-20 md:px-10 md:py-40">
      <div className=" grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16 py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            About Hunt AI
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Your next opportunity starts with your story.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Finding the right role can feel like a lot to navigate. Hunt AI brings resume tools, practical AI guidance, and country-focused job discovery together to help you take your next step with more clarity.
          </p>
          <p className="mt-4 text-base leading-7 font-medium text-slate-600">
            Your experience is yours. Use our suggestions as a starting point, shape them in your own voice, and choose the opportunities that fit your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.1} }}
          className="border-l-2 border-blue-200 pl-6 md:pl-8"
        >
          <h3 className="text-xl font-semibold text-slate-900">Built to support your next move</h3>
          <div className="mt-6 divide-y divide-amber-500 ">
            <div className="py-5">
              <p className="font-semibold text-slate-800">Your experience comes first</p>
              <p className="mt-2 leading-7 text-slate-600">
                Start with the skills and work you already bring. Get help presenting them clearly for the roles you want.
              </p>
            </div>
            <div className="py-5">
              <p className="font-semibold text-slate-800">Guidance you can shape</p>
              <p className="mt-2 leading-7 text-slate-600">
                Get practical ideas, then decide what reflects your strengths and sounds like you.
              </p>
            </div>
            <div className="py-5">
              <p className="font-semibold text-slate-800">A search built around your goals</p>
              <p className="mt-2 leading-7 text-slate-600">
                Focus your job search on the country and opportunities that matter to you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
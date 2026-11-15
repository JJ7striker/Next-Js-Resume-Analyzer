"use client"

import { FileText, MapPinned, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'

const services = [
  {
    number: '01',
    title: 'Resume templates',
    description:
      'Choose a clean, professional layout that helps your experience and skills stand out at a glance.',
    detail: 'Find a format that fits your next move.',
    icon: FileText,
    accent: 'bg-sky-100 text-sky-700',
    preview: ['Experience', 'Skills', 'Education'],
  },
  {
    number: '02',
    title: 'AI resume chat',
    description:
      'Ask questions about your resume and get practical suggestions for making your experience clearer and more relevant.',
    detail: 'Get guidance tailored to your resume.',
    icon: MessageCircle,
    accent: 'bg-emerald-100 text-emerald-700',
    preview: ['Improve this bullet', 'Highlight my strengths', 'Tailor for a role'],
  },
  {
    number: '03',
    title: 'Search by country',
    description:
      'Explore job opportunities by country and focus your search on the market where you want to work.',
    detail: 'Keep your opportunities in view.',
    icon: MapPinned,
    accent: 'bg-amber-100 text-amber-800',
    preview: ['Saint Lucia', 'United Kingdom', 'Canada'],
  },
]

const Services = () => {
  return (
    <section id="services" className="w-full bg-slate-50 px-5 md:px-10">
      <div className="mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Your job search toolkit
          </p>
          <motion.h2 className="text-3xl font-bold text-slate-900 md:text-5xl" initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5}}>
            Everything you need for your next step
          </motion.h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Build a stronger resume, get guidance when you need it, and explore opportunities in the country you choose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex min-h-80 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex size-11 items-center justify-center rounded-md ${service.accent}`}>
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="text-sm font-semibold text-slate-400">{service.number}</span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{service.description}</p>
                <p className="mt-5 text-sm font-medium text-slate-800">{service.detail}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${service.title} examples`}>
                  {service.preview.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
"use client"
import { motion } from 'motion/react'
import { useState } from 'react'
import emailjs from "@emailjs/browser"
import { Input } from '@/components/ui/input'

import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const submitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_EMAILJS_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;



        const templateParams = {
            name,
            email,
            message,
        };

        emailjs.init({
        publicKey: publicKey,
        blockHeadless: true,
        blockList: {
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            watchVariable: "userEmail"
        },
        limitRate: {
            id: "contact",
            throttle: 10000
        }
    });


        try {
            await emailjs.send(serviceId, templateId, templateParams);
            console.log("Email sent successfully!");
        } catch(err) {
            console.log("Error sending email, ", err);
        }

        setname("");
        setemail("");
        setmessage("");
    }


  return (
   <section className='w-full mt-6 px-3 py-8' id='contact'>
    <div className='w-full flex items-center justify-center'>
        <motion.h2 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}  className="text-2xl md:text-3xl font-bold p-5 shadow-sm shadow-blue-400 rounded-lg text-center  bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500">
          Contact Us for Any Queries
        </motion.h2>
        </div>

        <div className='w-full flex items-center justify-center mt-7'>
            <form onSubmit={submitContactForm} className='flex flex-col items-center gap-5 w-full max-w-xl px-3 py-4 rounded-lg shadow-sm shadow-gray-400'>
                <div className='w-full flex flex-col gap-1 items-start'>
                    <label>Enter Your Name</label>
                    <Input type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col gap-1 items-start'>
                    <label>Enter Your Email</label>
                    <Input 
                        placeholder="Your Email"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col gap-1 items-start'>
                    <label>Enter Your Message</label>
                    <Textarea placeholder="Enter Your Query Here" cols={30} rows={5} value={message} onChange={(e) => setmessage(e.target.value)} />

                    <Button type="submit" className="bg-blue-500 mt-3 mx-auto hover:text-blue-600 text-white w-3/5" variant={"outline"}>
                        Submit
                    </Button>
                </div>
            </form>
        
        </div>
         
   </section>
  )
}

export default Contact
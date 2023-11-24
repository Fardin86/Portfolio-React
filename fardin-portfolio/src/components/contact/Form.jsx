import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

const Form = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dywiqae', 'template_42bo41c', form.current, 'cxVj5qEqUFrlQ-LuU')
            .then((result) => {
                console.log(result.text);
                setShowSuccessMessage(true);
                setTimeout(() => setShowSuccessMessage(false), 5000);
                console.log("Messegae sent");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className='md:col-span-2  py-8 lg:w-[600px] lg:ml-14 px-4'>
                {showSuccessMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-cyan-500 text-white font-bold rounded-t px-4 py-8 text-center"
                    >
                        Message sent successfully!
                    </motion.div>
                )}
                <form ref={form} onSubmit={sendEmail}>
                    <label className='text-2xl font-bold text-white'>Name</label>
                    <input type="text" name="user_name" placeholder='Enter Your Name' className='bg-amber-600 p-4 w-full rounded-sm focus:outline-none text-white' />
                    <label className='text-2xl font-bold text-white'>Email</label>
                    <input type="email" name="user_email" placeholder='Enter Your Email' className='bg-amber-600 p-4 w-full rounded-sm focus:outline-none text-white' />
                    <label className='text-2xl font-bold text-white'>Message</label>
                    <textarea name="message" placeholder='Enter Your text' className='bg-amber-600 py-14 w-full rounded-sm  focus:outline-none text-white' />
                    <div className='py-2'>
                        <input type="submit" value="Let's talk" className='btn btn-lg bg-cyan-600 w-full text-center py-2 rounded-full hover:bg-red-600' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form
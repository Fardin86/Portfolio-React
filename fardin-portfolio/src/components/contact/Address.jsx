import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import { AiOutlinePhone } from 'react-icons/ai'
const Address = () => {
    return (
        <div>
            <div className=' py-8  shadow-sky-800 text-white fade-out'>
                <p className='flex gap-4 py-4 '>
                    <div>
                        <CgMail size={30} />
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>fardinhossen423@gmail.com</p>
                    </div>

                </p>
                <p className='flex gap-4 py-4'>
                    <div>
                        <AiOutlinePhone size={30} />
                    </div>
                    <div>
                        <p>Phone:</p>
                        <p>+8801867968002</p>
                    </div>

                </p>
                <p className='flex gap-4'>
                    <div>
                        <BiCurrentLocation size={30} />
                    </div>
                    <div>
                        <p>Address:</p>
                        <p className='py-4'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.393216734885!2d91.83012081487782!3d22.33877678530351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275885863c4b%3A0xbc3f917ea770e7c8!2sNandan%20Kanan%20No%203%20Ln%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1678612799502!5m2!1sen!2sbd" className='w-[300px] h-[200px]' style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='address'></iframe>
                        </p>
                    </div>

                </p>
            </div>
        </div>
    )
}

export default Address
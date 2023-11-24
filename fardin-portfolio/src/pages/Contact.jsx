import React from 'react'
import Address from '../components/contact/Address';
import Form from '../components/contact/Form';
const Contact = () => {




    return (
        <div id='contact' className='max-w-screen-lg mx-auto 	'>
            <div className='py-14 max-w-[1260px] mx-auto '>
                <h1 className='text-center text-orange-500 text-4xl font-bold'>Contact </h1>
                <div className='grid lg:grid-cols-3 gap-2 px-4 '>
                    {/* address */}
                    <Address />
                    {/* end address */}
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact





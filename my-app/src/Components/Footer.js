import React from 'react'

function Footer({ bgColor, textColor }) {
    return (
        <div style={{backgroundColor: bgColor, color: textColor}} className='pb-8 md:pt-8'>
            <div className="flex flex-col justify-center items-center leading-tight md:py-12 py-4 md:hidden">
                <h1 className='text-2xl'>free shipping over $120</h1>
                <h1 className='text-2xl'>14 day return policy</h1>
            </div>
            <div className='md:flex md:justify-around items-center '>
                <span className='flex justify-center md:block'>united states</span>
            <ul style={{padding: "0 4.6vw", }} className='divide-y divide-gray-200 md:divide-y-0 md:flex md:w-3/4 md:justify-between font-light'>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>store</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>guides</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>downloads</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>support</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>press</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>contact</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>terms and conditions</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
                <div className="flex justify-between text-2xl md:text-lg pb-2">
                    <li>privacy policy</li>
                    <p className='md:hidden'>{`>`}</p>
                </div>
            </ul>

            <span className='flex justify-center pt-8 md:pt-0'>©2021 teenage engineering</span></div>
        </div>
    )
}

export default Footer

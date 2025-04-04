import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id="testimonials">
        <h1 className='heading'>
            Kind words from  {' '}
            <span className='text-purple-300'>
                satisfied clients
            </span>
        </h1>

        <div className='flex flex-wrap items-center max-lg:mt-10 justify-center pt-5'>
                <InfiniteMovingCards 
                    items={testimonials}
                    direction='right'
                    speed="normal"
                />
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-5 max-lg:mt-10'>
                    {companies.map(({ id, img, name, nameImg}) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            <img src={img} alt={name} className='md:w-10 w-5'/>
                            {nameImg && <img src={nameImg} alt={name} className='md:w-24 w-20'/>}
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Clients
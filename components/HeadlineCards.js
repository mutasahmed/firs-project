
import React from 'react'
const HeadlineCards =()=>{


    return(
        <div  className=' max-w-[1640px]  mx-auto p-4 py-12 grid  md:grid-cols-3 group-6'>
            <div  className='rounded-xl relative   mr-4'>
                <div   className='   absolute w-full h-full bg-black/50   rounded-xl text-white'>
         
           <h1   className='font-bold text-2xl px-2 pt-4'>sun's out,Bogs out</h1>
           <h1   className='px-2'>through 8/26</h1>
           <button   className='border-white bg-white text-black  mx-2 absolute botton-6'>Orders</button>
           </div>

           <img className='max-h-[100px] md:max-h-[200px] w-full  object-cover rounded-xl'
            src='https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg?auto=compress&cs=tinysrgb&w=600'  
              alt=' /'/>
           </div>
           <div  className='rounded-xl relative   mr-4'>
                <div   className='   absolute w-full h-full bg-black/50   rounded-xl text-white'>
         
           <h1   className='font-bold text-2xl px-2 pt-4'>new resturent </h1>
           <h1   className='px-2'>added apply </h1>
           <button   className='border-white bg-white text-black  mx-2 absolute botton-6'>Orders</button>
           </div>

           <img className='max-h-[100px] md:max-h-[200px] w-full  object-cover rounded-xl'
            src='https://images.pexels.com/photos/3356412/pexels-photo-3356412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  
              alt=' /'/>
           </div>
           <div  className='rounded-xl relative  mr-4'>
                <div   className='   absolute w-full h-full bg-black/50   rounded-xl text-white'>
         
           <h1   className='font-bold text-2xl px-2 pt-4'>Mumtaz hotel</h1>
           <h1   className='px-2'>trusty treats </h1>
           <button   className='border-white bg-white text-black  mx-2 absolute botton-6'>Orders</button>
           </div>

           <img className='max-h-[100px] md:max-h-[200px] w-full  object-cover rounded-xl'
            src='https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=600'  
              alt=' /'/>
           </div>
        </div>
    )
}

export  default HeadlineCards 
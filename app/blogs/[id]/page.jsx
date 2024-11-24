'use client'

import { blog_Data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { Footer } from '@/Components/Footer';

const page = ({params}) => {

        const [data,setData] = useState(null);

        const fetchblog_Data = ()=>{
            for(let i=0;i<blog_Data.length;i++){

             if(Number(params.id)===blog_Data[i].id){
                setData(blog_Data[i]);
                console.log(blog_Data[i])
                break;
             }   

            }
        }

        useEffect(()=>{
            fetchblog_Data()
        },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'><img src="/logo.png" alt="" width={180} className="w-[130px]" /></Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <FaArrowRight/></button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-[28px] font-bold'>{data.title}</h1>
            <Image className='mx-auto my-6 border border-black rounded-full' src={data.author_img} width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>      
         <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
         <h1 className='my-8 text-[26px] font-semibold'>Introductiion:</h1>
         <p>{data.description}</p>
         <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self Reflection and Goal</h3>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>

         <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self Reflection and Goal</h3>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>

         <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self Reflection and Goal</h3>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>
         <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>

         <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
         <p>Managing your lifestyle is a journey that requires awareness and self commitment. You can take control of your life and make meaningful changes.</p>
        <div className='my-24'>
            <p className='text-black font-semibold'>Share this article on social media</p>
            <div className='flex text-[24px] gap-2'>
          <FaFacebook className= 'hover:cursor-pointer'/>
          <FaInstagram className='hover:cursor-pointer'/>
          <FaTwitter className='hover:cursor-pointer'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page
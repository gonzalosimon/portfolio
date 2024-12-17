"use client"

import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import DownloadButton from './DownloadButton';
import profileImage from '@/app/images/main_profile.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Main() {
  const onButtonClick = () => {
    const pdfUrl = "./../public/aguilar_cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Gonzalo_Aguilar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col justify-center items-center relative my-8 p-12 max-[340px]:very-small bg-[rgb(var(--card-background))] rounded-sm shadow-lg shadow-black/40">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#1c2432] rounded-full shadow-md">
        <Avatar className="w-36 h-36 border-4 border-[#1c2432] rounded-full shadow-md">
          <Image src={profileImage} alt="picture of Gonzalo" />

          <AvatarFallback className="bg-gray-700 text-white">GS</AvatarFallback>
        </Avatar>
      </div>

      <Navbar />

      <h1 className="max-[340px]:mt-6 sm:mt-12 mt-8 text-3xl font-bold text-center">
        Gonzalo Simon Aguilar
      </h1>

      <p className="mt-4 text-base text-center max-w-2xl">
        I'm a software developer with over five years of experience, specializing in web and mobile development using TypeScript.
      </p>

      <p className="mt-4 text-base text-center max-w-2xl"><span aria-label="email" role="img">📧 </span>aguilargzb@gmail.com</p>

      <div className='flex justify-center items-center gap-6'>
        <DownloadButton />

        {/* <Link
          href="/resume"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg inline-flex justify-center"
        >
          View Resume
        </Link> */}

        {/* <Link
          href="/resume"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg inline-flex justify-center"
        >
          More about me →
        </Link> */}
      </div>
    </section>
  );
}

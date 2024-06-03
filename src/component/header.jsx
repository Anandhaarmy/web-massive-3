import React from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import heroImage from '../assets/hero.jpeg';

const WelcomePage = () => {
  return (
    <div className="container mx-auto p-14">
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        <div className="flex md:flex-row items-center md:w-1/2">
          <div className="text-center md:text-left md:pr-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Welcome to Our Website!
            </h1>
            <p className="mt-8 text-zinc-600 dark:text-zinc-300">
              <span className="text-orange-500 text-3xl">Sekarang Cari Kost Semudah Rebahan</span><br />
              <span className="text-black text-2xl mt-4">Bingung cari kost dimana ? Cari disini Aja !</span><br />
              <span className="text-black text-2xl">Cari kost jadi lebih mudah, cepat, dan tidak perlu keliling kota.</span>
            </p>
            <div className="flex mt-8 md:flex-row md:space-x-4 md:items-center">
              <img src={image1} alt="Image 1" className="w-60 h-60 rounded-lg shadow-lg mb-4 md:mb-0" />
              <img src={image2} alt="Image 2" className="w-60 h-60 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:order-none flex justify-end">
          <img src={heroImage} alt="Hero Image" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

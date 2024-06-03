import React from 'react';
import mainImage from '../assets/main-image.jpeg';
import smallImage1 from '../assets/small-image1.jpeg';
import smallImage2 from '../assets/small-image2.jpeg';
import smallImage3 from '../assets/small-image3.jpeg';

const Welcome = () => {
    return (
        <div className="container mx-auto p-14">
            <div className="bg-white flex flex-col md:flex-row justify-center items-center">
                <WelcomeText />
                <ImageSection />
            </div>
        </div>
    );
};

const WelcomeText = () => {
    return (
        <div className="text-black md:w-1/2">
            <h1 className="text-3xl font-bold mb-3 text-center text-orange-500">Nice to meet you</h1>
            <p className="text-lg mb-2">
                Selamat datang di KostCozy, tempat yang nyaman dan aman bagi para mahasiswa yang sedang mencari kos yang terdekat pada kampus. Kami adalah tim yang berdedikasi untuk memberikan pengalaman tinggal yang terbaik bagi para Mahasiswa.
                Di KostCozy, kami mengerti betapa pentingnya memiliki tempat tinggal yang nyaman dan bersih. Itulah sebabnya kami berkomitmen untuk menyediakan fasilitas yang berkualitas dan pelayanan yang ramah kepada semua penghuni kami.
                Kami berharap Anda menemukan tempat yang sempurna untuk tinggal di Rumah Kost dan merasa seperti di rumah sendiri. Terima kasih atas kepercayaan Anda kepada kami.
            </p>
            <p className="text-lg mt-5">
                Salam hangat,
                <br/>
                Tim KostCozy
            </p>
        </div>
    );
};

const ImageSection = () => {
    return (
        <div className="md:w-1/2 flex flex-col justify-center items-center">
            <img src={mainImage} alt="Main Image" className="rounded-lg mb-4 w-full md:w-auto"/>
            <div className="flex justify-center items-center w-full flex-wrap">
                <SmallImage src={smallImage1} alt="Small Image 1" />
                <SmallImage src={smallImage2} alt="Small Image 2" />
                <SmallImage src={smallImage3} alt="Small Image 3" />
            </div>
        </div>
    );
};

const SmallImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="rounded-lg shadow-md mx-2 my-2 w-24 h-24 object-cover" />
    );
};

export default Welcome;

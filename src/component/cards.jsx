import React from 'react';
import PropTypes from 'prop-types';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpeg';

// Product data could be fetched from an API atau didefinisikan di sini
const products = [
    {
        id: 1,
        name: 'Universitas Sains Alquran (UNSIQ)',
        description: "Jl. KH. Hasyim Asy'ari Km. 03 Kalibeber Kecamatan Mojotengah.",
        price: '2000.000',
        imageUrl: product1
    },
    {
        id: 2,
        name: 'Sekolah Tinggi Ilmu Kesehatan Muhammadiyah Wonosobo',
        description: "Jl. Munggang, kalibeber mojotengah wonosobo.",
        price: '170.000',
        imageUrl: product2
    },
    {
        id: 3,
        name: 'Akademi Pertanian PGRI Wonosobo',
        description: "Jln. Mayjen Bambang Sugeng No. 1 Sidojoyo Wonosobo",
        price: '300.000',
        imageUrl: product3
    }
];

// ProductCard component
const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-sm">
            <img 
                src={product.imageUrl} 
                alt={`Image of ${product.name}`} 
                className="w-full h-48 object-cover" 
                onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=Image+not+available'} 
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-black">{product.name}</h2>
                <p className="text-zinc-700">{product.description}</p>
            </div>
            <div className="flex flex-col justify-between items-end p-4">
                <span className="text-zinc-500 mb-2">{product.price ? `Biaya mulai kost` : 'Harga tidak tersedia'}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">{product.price ? `${product.price}/bulan` : 'Harga tidak tersedia'}</button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
    }).isRequired
};

// FeaturedProducts component
const FeaturedProducts = () => {
    return (
        <div className="container mx-auto p-14 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center my-8 text-black">Our Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
  
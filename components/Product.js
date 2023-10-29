'use client'
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
import { useRouter } from 'next/navigation';


const Product = ({ products }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(add(item));
    router.push('/cart');
  };

  return (
    <div className="border-2 border-black rounded-md group hover:border-2 hover:border-violet-500 shadow shadow-pink-500 flex flex-col h-full">
      <div className="flex flex-col justify-center items-center p-2">
        <Image src={products.image} width={200} height={200} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="font-bold pt-2">{products.title}</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="px-3">{products.description}</div>
      </div>

      <div className="flex justify-between items-center px-3 mt-2">
        <div className="text-3xl">₹{products.discountPrice}</div>
        <div className="">
          M.R.P <span className="line-through"> ₹{products.price}</span>
        </div>
        <div className="text-red-500">({products.discountPer}% off)</div>
      </div>

      <div className="mt-auto flex justify-between m-2">
        <p className='text-2xl font-bold text-yellow-400 group-hover:text-yellow-600'>{products.rating}</p>
        <button
          onClick={() => handleAdd(products)}
          className="py-2 px-5 rounded bg-fuchsia-700 text-white shadow shadow-teal-600 font-extrabold group-hover:bg-teal-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

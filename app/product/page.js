'use client'
import Product from '@/components/Product';
import React, { useState } from 'react';


const products = [
  {
    id: 1,
    title: 'Urbano Fashion',
    price: 1099,
    discountPrice: 336,
    discountPer: 69,
    description:
      'Urbano Fashion Mens Printed Full Sleeve Slim Fit Cotton T-Shirt',
    image: '/t-shirt.jpg',
    category:'mens',
  },
  {
    id: 2,
    title: 'Neostreak',
    price: 1799,
    discountPrice: 649,
    discountPer: 64,
    description:
      'Neostreak Mens Cotton Hooded Neck Full Sleeve Sweatshirt',
    image: '/neostric.jpg',
    category:'mens',
  },
  {
    id: 3,
    title: 'Peppyzone',
    price: 1299,
    discountPrice: 629,
    discountPer: 52,
    description:
      'Mens Camouflage Regular Fit Track Pant',
    image: '/peppyzone.jpg',
    category:'mens',
  },
  {
    id: 4,
    title: 'HammerSmith',
    price: 1299,
    discountPrice: 269,
    discountPer: 79,
    description:
      'Mens Checkered Regular Fit Shirt Forest Green',
    image: '/shirt.jpg',
    category:'mens',
  },
  {
    id: 5,
    title: 'GoSriKi',
    price: 2599,
    discountPrice: 605,
    discountPer: 77,
    description:
      'Women Kurta with Pant & Dupatta',
    image: '/Dupatta.jpg',
    category:'womens',
  },
  {
    id: 6,
    title: 'Wedani',
    price: 849,
    discountPrice: 156,
    discountPer: 82,
    description:
      'Womens Casual Short Sleeves Round Neck Foral Top',
    image: '/Sleeves.jpg',
    category:'womens',
  },
  {
    id: 7,
    title: 'Leriya',
    price: 1999,
    discountPrice: 349,
    discountPer: 83,
    description:
      'Rayon Solid Button Front Shirt Dress for Women',
    image: '/Leriya.jpg',
    category:'womens',
  },
  {
    id: 8,
    title: 'AKHILAM',
    price: 2999,
    discountPrice: 699,
    discountPer: 77,
    description:
      'Womens Woven Design Kanjivaram Banarasi Silk Saree',
    image: '/saree.jpg',
    category:'womens',
  },
  {
    id: 9,
    title: 'Apple',
    price: 59900,
    discountPrice: 50999,
    discountPer: 15,
    description:
      'Apple iPhone 15 (128 GB) - Blue',
    image: '/apple.jpg',
    category:'smartphones',
  },
  {
    id: 10,
    title: 'realme narzo N53',
    price: 10999,
    discountPrice: 7999,
    discountPer: 27,
    description:
      ' (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging.',
    image: '/realme.jpg',
    category:'smartphones',
  },

]
export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value, selectedCategory);
  };

  const filterProducts = (searchTerm, category) => {
    const filtered = products.filter((product) => {
      const titleMatches = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = category === 'all' || product.category === category;
      return titleMatches && categoryMatches;
    });

    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  return (
   <section>
     <div className='container mx-auto'>
     <div className="flex justify-center items-center mt-5">
            <input  className="py-3 w-64 border-2 border-red-50 rounded-md outline-none" type='text' placeholder='Search products...'  value={searchTerm}
            onChange={handleSearchChange}/>
        </div>
        <div className=" flex justify-center items-center space-x-3 mt-3">
        <button
            className={`bg-red-300 py-2 px-3 rounded-md ${selectedCategory === 'all' ? 'bg-red-500' : ''}`}
            onClick={() => handleCategoryFilter('all')}
          >
            All
          </button>
        <button
            className={`bg-red-300 py-2 px-3 rounded-md ${selectedCategory === 'mens' ? 'bg-red-500' : ''}`}
            onClick={() => handleCategoryFilter('mens')}
          >
            Mens
          </button>
          <button
            className={`bg-red-300 py-2 px-3 rounded-md ${selectedCategory === 'womens' ? 'bg-red-500' : ''}`}
            onClick={() => handleCategoryFilter('womens')}
          >
            Womens
          </button>
         
        </div>
      <div className='grid grid-cols-1 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12 px-2'>
        {
          filteredProducts.map((products)=>{
            return <Product products={products}/>
          })
        }
      </div>
    </div>
   </section>
  )
}

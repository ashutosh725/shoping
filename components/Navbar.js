'use client'
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

const Navbar = () => {
    const item = useSelector((state)=>state.cart)
   
  return (
    <header className="bg-[#06062a] text-white ">
     <div className="container mx-auto ">
     <div className="flex justify-around items-center  py-3">
        <Link href='/' className="text-xl font-bold">New<span className="text-purple-500">Brands</span></Link>
        
       <div className="flex justify-center items-center space-x-3">
       <Link href='/cart' className="relative cursor-pointer   lg:flex">
        <Image src={'bag.svg'} width={38} height={38} alt=""/>
        <div className="bg-[#331812]  w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">{item.length}</div>
       
        </Link>
      
       </div>
       
      </div>
     </div>
    </header>
  )
}

export default Navbar

"use client"
import { remove } from '@/Redux/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineTrash } from "react-icons/hi";
import Image from 'next/image';



export default function Cart(){
   
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart)

    const totalAmount = cartitems.reduce((total, item) => total + item.price, 0);

    const handleremove = (id)=>{
        dispatch(remove(id))
    }

    return(
        <div className='h-full min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-2xl  pt-5 '>Cart items</h3>
            <span className="inline-flex h-1 w-28 sm:w-28 rounded bg-indigo-500 mb-3 mt-2"></span>
            </div>
      
      <div className='w-full flex flex-col lg:flex-row '>
      <div className=' lg:w-3/4 flex flex-col  '>

      {
        cartitems.map((item)=>(
        
                <div key={item.id} className='flex   justify-around items-center shadow py-3'>
                <Image src={item.image} alt='' width={128} height={128} className='object-cover'/>
                <h5>{item.title}</h5>
                <h5>₹{item.price}</h5>
                
                
                <HiOutlineTrash onClick={()=>handleremove(item.id)} className=' text-2xl font-bold text-red-500 hover:text-red-800'/>
                </div>
               
               
          
        ))
      }
       </div>  
       <div className='lg:w-1/4  '>
        <div className='flex flex-col gap-y-5  items-end lg:items-start p-4  shadow-md'>
        <h1 className='text-2xl font-bold '>Total Amt: ₹{totalAmount.toFixed(2)}</h1>
                    <button className='py-2 px-5 rounded-full bg-blue-300 font-extrabold hover:bg-blue-600'>Checkout</button>
        </div>
                   
                </div>
        </div>
    </div>
 
    )
}
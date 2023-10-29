import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
export default function MainFooter(){
    return(
       <footer className="bg-gray-900 text-white">

        <div className="md:flex md:justify-between sm:px-12 px-4  bg-[#fffffff19] py-7 md:items-center">
            <h1 className="lg:text-4xl text-3xl mb:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"><span className="text-teal-400">Free </span>until you're ready to launch</h1>
            <div>
                <input type="text" placeholder="Enter Your ph.no" className="text-gray-800 bg-white sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
                <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-semibold rounded-md text-white md:w-auto w-full">Request Code </button>
            </div>
        </div>
       
        <div className="bg-gray-950 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
          <ul>
            <h1 className="mb-1 font-semibold">PRODUCTS</h1>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6 ">Drag And Drop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Visual Studio</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Easy Content</a></li>
         
          </ul>
          <ul>
          <h1 className="mb-1 font-semibold">RESOURCES</h1>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Industries and tools</a></li>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Use cases</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Online evenet</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Nostrud exercitation</a></li>
          </ul>
          <ul>
          <h1 className="mb-1 font-semibold">COMPANY</h1>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Diversity & inclusion</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">About us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Press</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Customer Stories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Online communities</a></li>
          </ul>
          <ul>
          <h1 className="mb-1 font-semibold">SUPPORT</h1>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Documentation</a></li>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Tutorials & guides</a></li>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Webinars</a></li>
          <li><a href="#" className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">Open-source</a></li>
          </ul>
        </div>
        <div className="bg-gray-950 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
            <span>&#169;. 2023 Apply. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <div className="text-teal-500 ">
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"><FaFacebookF/></span>
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"><FaTwitter/></span>
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"><FaLinkedinIn/></span>
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"><FaInstagram/></span>
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"><FaTelegramPlane/></span>
            </div>
        </div>

        
      
       </footer>
    )
}
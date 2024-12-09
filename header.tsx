

 

const UpperHeader = () => {
  return(
    <div className="h-[48px] w-full p-3 bg-black text-white hidden md:flex items-centre justify-between ">

      
      <div className="mx-w-7xl  mx-auto flex items-centre justify-centre">
        <p className="text-white">Sign up and get 20% OFF to your first order  
        <span className="font-bold underline ml-2">Sign Up Now
        
        </span>   
         </p>    
         <p className="text-white flex justify-between text-centre ml-40">
      
      </p>
    
         
         
           </div>



    </div>

    
  )
}

export default UpperHeader;

import Link from "next/link";

export const LowerHeader = () => {
  return(
    <header className="flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
  <div className="flex md:text-2xl flex-wrap items-center gap-5 w-full">
    <h1 className="md:text-2xl text-base text-black font-bold ml-20">SHOP.CO</h1>
  
          <div className="items-centre justify-center flex px-3 ml-15 gap-3">
            <ul className="items-centre justify-center flex px-3 gap-3 ml-15">
              
            <a
             href="/shop" 
               className="mx-lg:border-b max-lg:py-3"
           >
            <li className="lgpx-3lg:hover:text-[#007bff] text-black block font-semibold text-[15px]">
            
            Shop
          
        </li>
        </a>
              
        <a 
        href="/OnSale"
         className="max-lg:border-b max-lg:py-3"> 
        <li className="px-3lg:hover:text-[#007bff] text-black block font-semibold text-[15px]"
            >
                On Sale
      
        </li>
        </a>

      

        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="/Newarrivals"
            className="lg:hover:text-[#007bff] text-gray-800 block font-semibold text-[15px]"
          >
            New Arrivals
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a 
            href="/Brands"
            className="lg:hover:text-[#007bff] text-black block font-semibold text-[15px]"
          >
            Brands
          </a>
        </li>

      </ul>
    </div>
    <div className="flex lg:ml-auto max-lg:w-full">
      <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-4 py-3 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
        <input
          type="text"
          placeholder="Search for Products..."
          className="w-full text-sm bg-transparent rounded outline-none pr-2"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="cursor-pointer fill-gray-400"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
       
      </div>

    </div>
   
  </div>
</header>

  )
};
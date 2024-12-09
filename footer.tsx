import { Input } from "postcss";

export default function Footer () {
  return(
<>
  <div className="bg-black text-white text-bold justify-centre p-4 justify-ceentre items-centre text-4xl ml-25">
    <p className="ml-20 font-[sans-serif] font-extrabold justify-centre mt-2">STAY UP TO DATE ABOUT</p>
    <h1 className="ml-20 font-extrabold justify-centre  ">OUR LATEST OFFERS</h1>
    

  </div>
  <footer className="text-black body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        
          <h1 className="ml-15 text-4xl text-bold color-black font-[sans-serif] font-extrabold">SHOP.CO</h1>
      
        <p className="mt-2 text-sm text-gray-800">
          We have clothes that suites your style and 
          which you're proud to wear. From 
          women to men.
        </p>
      </div>
      
      <div className="flex-grow flex flex-wrap md:pl-20  gap-5-mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
            COMPANY
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-800 hover:text-gray-800">About</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Features</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Works</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Career</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
            HELP
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Terms & Condition</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 gap-5">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            FAQ
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Account</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Orders</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Payment</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            RESOURCES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Free eBook</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Development Tutorial</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">How to - Blog</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-800 text-sm text-center sm:text-left">
          Shop.co © 2000-2023, All Rights Reserved 
          <a
            href="https://twitter.com/knyttneve"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
          
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-800">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-800">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-800">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</>


  )
}
const Customers = () => {
  return(
    <div className="p-4 font-sans">
  <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md">
    <div className="p-6 border-b">
      <h2 className="text-3xl font-extrabold text-black text-4xl">
        OUR HAPPY CUSTOMERS 
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <img src="Frame 10(1).png">
        </img>
        
        <h3 className="text-lg gap-2 flex font-semibold text-black font-bold mt-3">
          Sarah M. <img src="Frame.jpg"></img>
        </h3>
        <p className="text-gray-600 text-sm mt-4">
          "I'm blown away by quality and style of the
          clothes I received from Shop.co. From casual
          wear to elegant dresses, every piece I've bought
          has exceeded my expectations"
        </p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <img src="Frame 10(1).png">
        </img>
        
        <h3 className="text-lg  flex gap-2 font-semibold text-black font-bold mt-3">
          Alek K. <img src="Frame.jpg" className="flex justify-between items-centre"></img>
        </h3>
        
        <p className="text-gray-600 text-sm mt-4">
          "Findings clothes that alignwith my personal
          style used to be challenge until I discovered 
          Shop.co. The range of options they offer is truly
          remarkable, catering to veriety of taste and 
          occasions."
        </p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <img src="Frame 10(1).png">
        </img>
               <h3 className="text-lg flex gap-2 font-semibold text-black font-bold mb-2 mt-3">
          Jamed L. <img src="Frame.jpg" className="flex"></img>
        </h3>
        <p className="text-gray-600 text-sm mt-4">
         "As someone who's always on the lookout for 
         unique fashion pieces, I'm thrilled to have
         stumbled upon Shop.co. The selecction of 
         clothes is not diverse but also on-point
         with the latest trends"
        </p>
      </div>
    </div>
  </div>
</div>

  )
};
export default Customers;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 shadow-md bg-gray-100 h-20 p-4 flex justify-between items-center">
      <div className="flex items-center">
        
      </div>
      
      <div className="flex items-center justify-end flex-grow">
        <div className='text-lg font-mono cursor-pointer max-sm:text-sm  px-6 '>Business Information</div>
      </div>
      
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

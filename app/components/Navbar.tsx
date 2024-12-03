
'use client'; 

    import { useState } from 'react';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false); 

  
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
       <nav className="bg-gray-800 p-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
       
        <div className="text-white text-xl">My App</div>

       
        <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
      <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
        </div>

        
             <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
           
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
                </button>
        </div>
</div>

      
      {isOpen && (
        <div className="bg-gray-800 p-4 md:hidden">
          <a href="#" className="text-white block px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-white block px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md">Contact</a>
   </div>
      )}
    </nav>
  );
};

export default Navbar;

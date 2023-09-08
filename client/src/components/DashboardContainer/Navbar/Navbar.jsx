import React from "react";

const Navbar = () => {
  return <> <nav className="bg-orange-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-white text-2xl font-bold">Logo</div>
    
    {/* Menu List */}
    <ul className="flex space-x-4">
      <li><a href="#" className="text-white hover:text-gray-300">App1</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App2</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App3</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App4</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App5</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App6</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App7</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">App8</a></li>
    </ul>
    
    {/* Profile */}
    <div className="flex items-center space-x-2">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-white">Username</span>
    </div>
  </div>
</nav></>;
};

export default Navbar;

import React from 'react';

const HeaderRs = () => {


  return (
    <div class="bg-gradient-to-br from-purple-500 to-purple-700 h-screen flex justify-center items-center">
    <svg width="200" height="200" className='bg-gray-500'>
      <path d="M 50 10 A 40 40 0 0 1 5 90" fill="none" stroke="black" stroke-width="3" />
      <circle cx="100" cy="100" r="50" fill="#fff" className=''/>
      <text 
      x="50%" y="50%" 
      dominant-baseline="middle" 
      text-anchor="middle" 
      font-size="24" 
      font-weight="bold" 
      fill="#000" >
        أنا كتاب  
      </text>
    </svg>
    <div class="flex flex-col justify-center items-center">
      <div class="w-16 h-16 rounded-lg bg-purple-600"></div>
      <div class="w-16 h-16 rounded-lg bg-blue-600 mt-4"></div>
      <div class="w-16 h-16 rounded-lg bg-pink-600 mt-4"></div>
      <div class="w-16 h-16 rounded-lg bg-gray-600 mt-4"></div>
    </div>
    <svg width="200" height="200">
      <circle cx="100" cy="100" r="5" fill="#fff"/>
      <circle cx="100" cy="50" r="5" fill="#fff"/>
      <circle cx="100" cy="150" r="5" fill="#fff"/>
      <circle cx="50" cy="100" r="5" fill="#fff"/>
      <circle cx="150" cy="100" r="5" fill="#fff"/>
      <line x1="100" y1="100" x2="100" y2="50" stroke="#fff" stroke-width="2"/>
      <line x1="100" y1="100" x2="100" y2="150" stroke="#fff" stroke-width="2"/>
      <line x1="100" y1="100" x2="50" y2="100" stroke="#fff" stroke-width="2"/>
      <line x1="100" y1="100" x2="150" y2="100" stroke="#fff" stroke-width="2"/>
    </svg>
  </div>
  
  );
};

export default HeaderRs;
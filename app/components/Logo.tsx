

import Image from "next/image";
import React from "react";

const Logo = () => {

  return ( 
    <div className=" flex flex-row justify-center items-center font-semibold  text-sm mb-4 ">
<Image
      className=" md:block cursor-pointer p-0  m-2 " 
      src="/chatLogo.png" 
      height="300" 
      width="300" 
      alt="ACE Chat" 
    />
   

    </div>
 
    
   );
}
 
export default Logo;

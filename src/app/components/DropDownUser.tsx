"use client";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel
  } from "../components/ui/dropdown-menu";
import { BsCaretDownFill } from "react-icons/bs";


// import user from "../assets/user.webp"
// import user from "../assets/landing-page/user.webp";
import userImg from "../assets/landing-page/user_final.webp";

import Image from "next/image";


const DropDownUser = () => {



    return (
        <DropdownMenu>
            
            <DropdownMenuTrigger className="flex items-center    focus:outline-none  ">
                <div>

                    <Image className="w-10 h-10 rounded-full object-cover mr-2" src={userImg }
                    alt="userImage" />
                <BsCaretDownFill size={12} className=" flex ml-3" />
                </div>

     
            </DropdownMenuTrigger>
            <DropdownMenuContent>
             
                <DropdownMenuLabel >
                  
                
                    
                    </DropdownMenuLabel>
                <DropdownMenuSeparator />
                   

                <DropdownMenuItem>
                 
                </DropdownMenuItem>
            
           
            </DropdownMenuContent>
        </DropdownMenu>

    )
};
export default DropDownUser;
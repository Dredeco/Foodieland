import { useState } from "react";

export function Header() {
    let navLinks =[
        {name:"Home",link:"/"},
        {name:"Recipes",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Contact",link:"/"},
        {name:"About us",link:"/"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-facebook-f", link:"/"},
        {name: "fa-brands fa-twitter", link:"/"},
        {name: "fa-brands fa-instagram", link:"/"},
    ];
      let [open,setOpen]=useState(false);

    return (
        <div className="w-full fixed top-0 left-0 z-10 border-b">
            <div className='flex w-full self-center h-28 bg-white justify-between items-center px-20'>
                <a href="/" className="text-2xl font-lobster flex">
                    Fodieland<p className="text-orange-500">.</p>
                </a> 

                <div onClick={()=>setOpen(!open)} className='flex justify-end text-3xl cursor-pointer lg:hidden'>
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={`flex flex-col lg:flex-row absolute lg:static mt-8 lg:mt-0 ml-[-80px] lg:ml-0 w-full lg:w-auto text-center bg-white transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    navLinks.map((link)=>(
                        <li key={link.name} className='lg:ml-8 text-base font-medium lg:py-0 py-5 border-t lg:border-t-0'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 hover:underline underline-offset-2 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>

                <ul className={`flex justify-center lg:static absolute mt-[355px] lg:mt-0 border-y lg:border-y-0 w-full lg:w-auto ml-[-80px] lg:ml-0 bg-white transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    socialLinks.map((link)=>(
                        <li key={link.name} className='text-center px-8 lg:px-0 lg:ml-8 text-xl lg:py-0 py-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 hover:underline underline-offset-2 duration-500'><i className={link.name} /></a>
                        </li>
                    ))
                    }
                </ul>

            </div>
        </div>
    );
}
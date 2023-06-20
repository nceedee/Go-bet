import React, { ReactNode, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import { menuItem } from './Menus';
import { Profile } from '../../../UI/profile/Profile';

export const Sidebar = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="flex relative">
            <div className={`${isOpen ? "w-[250px]" : "w-[50px]"} bg-black text-white h-[100vh] transition-all duration-[0.5s] `}>
                <div className=' text-white translate-y-[-8px] border-b-gray-600 rounded-b-[40px] border-b'>
                    <div className={`${isOpen ? "m-2" : "ml-0"} flex items-center text-[25px] my-2 justify-between`}>
                        <h1 className={`${isOpen ? "block" : "hidden"} font-bold`}>Profile</h1>
                        <FaBars onClick={toggle} className={`${isOpen ? "ml-0" : "ml-3"} cursor-pointer`} />
                    </div>
                    <div className="flex items-center py-[20px] justify-center px-[15px] ">
                        <div className={`${isOpen ? "block" : "hidden"} text-[30px]`}>
                            <Profile className='rounded-full w-[100px]' />
                            <h5 className='text-[16px] mt-2 text-center font-bold'>Sign up</h5>
                        </div>

                    </div>
                </div>
                <div className='bg-black'>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className=" flex items-center text-white py-[10px] px-[15px] space-x-3 transition-all duration-[0.5s] border-l border-l-transparent hover:border-l-blue-400 hover:border-l-4 active:transition-all active:duration-[0.5s]">
                                <div className="icon">{item.icon}</div>
                                <div className={`${isOpen ? "block" : "hidden"} text-[18px]`}>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <main className='p-[20px]'>{children}</main>
        </div>
    );
};

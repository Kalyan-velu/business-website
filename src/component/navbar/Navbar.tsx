import Link from "next/link";
import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineSearch,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Logo from "@/component/Logo";

const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false);
    const handleSideMenu = () => {
        setSideMenu(!sideMenu);
    };
    return (
        <div className="fixed w-full h-16 z-[100] bg-white shadow-lg shadow-gray-300 top-0 left-0 right-0">
            <div className="flex items-center justify-between w-full h-full p-6">
                <div className="md:flex-1">
                    <Logo/>
                </div>
                <div className="text-xl md:flex-1 md:mr-10">
                    <ul className="items-center justify-between hidden md:flex">
                        <Link href="/" className={"hover:bg-sky-700 p-[1rem]"}>
                            <li>About</li>
                        </Link>
                        <Link href="/" className={"hover:bg-sky-700 p-[1rem]"}>
                            <li>Business</li>
                        </Link>
                        <Link href="/" className={"hover:bg-sky-700 p-[1rem]"}>
                            <li>Services</li>
                        </Link>
                        <Link href="/" className={"hover:bg-sky-700 p-[1rem]"}>
                            <li>Team</li>
                        </Link>
                        <AiOutlineSearch />
                    </ul>
                    <div className="cursor-pointer md:hidden" onClick={()=>setSideMenu(!sideMenu)}>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div>
            <div
                className={
                    sideMenu
                        ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        sideMenu
                            ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <Logo/>
                        </div>
                        <div
                            onClick={handleSideMenu}
                            className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="my-4 border-b border-blue-300">
                        <p className="w-[85%] md:w-[90%] py-4 mx-auto">
                            Lets build something legendary together
                        </p>
                    </div>
                    <div className="flex flex-col py-4">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4">About</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4">Business</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4">Services</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-3xl">Team</li>
                            </Link>
                        </ul>
                        <div className="pt-20 grid justify-items-center">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Lets Connect
                            </p>
                            <div className="flex items-center justify-around my-3 w-full sm:w-[100%]">
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <FaLinkedinIn />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <FaGithub />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <AiOutlineMail />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <BsPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
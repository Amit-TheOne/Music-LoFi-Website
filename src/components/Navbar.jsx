import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons//ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const signup = () => {
        alert("signup");
    };

    return (
        <div className="top-0">
            <div className="flex flex-row justify-between items-center h-20 max-w-[1440px] mx-auto px-4 text-white bg-[#363333] md:justify-self-auto">
                {/* Logo */}
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">
                        LOGO MUSIC
                    </h1>
                </div>

                {/* Navigation */}
                <div>
                    <ul className="hidden md:flex flex-row text-lg hover:cursor-pointer">
                        <li className="p-6 hover:bg-[#363333]">Home</li>
                        <li className="p-6 hover:bg-[#363333]">Company</li>
                        <li className="p-6 hover:bg-[#363333]">Resources</li>
                        <li className="p-6 hover:bg-[#363333]">About</li>
                        <li className="p-6 hover:bg-[#363333]">Contact</li>
                    </ul>
                </div>

                {/* Button */}
                <div className="flex flex-row">
                    <button
                        type="button"
                        onClick={signup}
                        class="hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        onClick={signup}
                        class="hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        SignUp
                    </button>
                </div>

                {/* Mobile Menu */}
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>
                <div
                    className={
                        !nav
                            ? "fixed left-0 top-0  w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 block md:hidden"
                            : "fixed left-[-100%]"
                    }
                >
                    <div>
                        <h1 className="w-[80%] text-3xl box-content font-bold text-[#00df9a] m-4">
                            MUSIC LOGO
                        </h1>
                    </div>

                    <ul className="py-3 text-center uppercase">
                        <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
                            Home
                        </li>
                        <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
                            Company
                        </li>
                        <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
                            Resources
                        </li>
                        <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
                            About
                        </li>
                        <li className="p-4 hover:bg-[#363333]">Contact</li>
                    </ul>

                    <div className="flex flex-col items-center">
                        <button
                            type="button"
                            onClick={signup}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            onClick={signup}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

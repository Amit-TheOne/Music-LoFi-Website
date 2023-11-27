import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#242424] text-gray-300">
            <div className="max-w-[1240px] mx-auto pt-16 pb-10 px-4 grid lg:grid-cols-2 gap-10 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">
                        DATAEYE.
                    </h1>
                    <p className="py-4 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Molestiae possimus autem natus magni non dolores
                        pariatur iste asperiores ea quas?
                    </p>
                </div>
                <div className="mx-auto">
                    <div className="lg:col-span-2 flex md:flex-row lg:flex-col">
                        <h5 className="font-bold text-gray-400 text-2xl lg:text-xl sm:pb-4">
                            FOLLOW US ON
                        </h5>
                        <div className="flex lg:w-[100%] space-x-5 md:space-x-16 hover:cursor-pointer pl-10 lg:px-0">
                            <FaFacebookSquare size={30} />
                            <FaInstagram size={30} />
                            <FaTwitterSquare size={30} />
                            <FaGithubSquare size={30} />
                            {/* <FaDribbbleSquare size={30} /> */}
                        </div>
                    </div>
                </div>
                {/* <div className=" mb-[-6] mx-auto"> */}
                <p className="font-medium text-gray-200 mx-auto lg:col-span-3">
                    Made with ♥ by{" "}
                    <span className="text-[#00df9a]">Amit Dewangan</span>
                </p>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Footer;

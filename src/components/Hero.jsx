import React from "react";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 sm:text-2xl">
                    ENHANCE PRODUCTIVITY WITH MUSIC
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-5">
                    Increase your Focus.
                </h1>
                <div className="flex justify-center items-center ">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Soothing, calm & relaxing
                    </p>
                    {/* <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 px-3 sm:px-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <button
                    type="button"
                    className="w-[170px] font-medium rounded-full text-md mx-auto my-9 py-4 text-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;

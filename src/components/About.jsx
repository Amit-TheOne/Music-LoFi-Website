import React from "react";
// import Laptop from "../assets/laptop.jpg";

const About = () => {
    return (
        <div className="w-full bg-white py-6 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:py-6">
                <img
                    className="w-[500px] mx-auto my-4"
                    src={"Laptop"}
                    // alt="/"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Manage Data Analytics Centrally
                    </h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis labore quas voluptate accusantium doloremque
                        repellendus adipisci eum ipsa soluta reprehenderit ea
                        dolore, in eveniet modi minus eligendi, autem at? Quo
                        sed debitis distinctio perferendis.
                    </p>
                    <button
                        type="button"
                        className="bg-black text-[#00df9a] w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

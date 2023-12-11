import React from "react";

import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Footer from "../components/Home/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    );
};

export default Home;

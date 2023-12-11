import Discover from "./Music/Discover";
import { Routes, Route } from "react-router-dom";

const music = () => {
    return (
        <Routes children={true}>
            <Route index element={<Discover />} />
            {/* <Route path="artist" element="Helllo" /> */}
        </Routes>
    );
};

export default music;

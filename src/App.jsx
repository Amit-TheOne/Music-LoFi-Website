import { Routes, Route } from "react-router-dom";

import HomeRoute from "./pages/HomeRoute";
import MusicRoute from "./pages/MusicRoute";
import LofiProductivity from "./pages/LofiProductivity";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/music/*" element={<MusicRoute />} />
            <Route path="/lofi-productivity" element={<LofiProductivity />}></Route>
        </Routes>
    );
}

export default App;

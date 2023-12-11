import { Routes, Route } from "react-router-dom";

import HomeRoute from "./pages/HomeRoute";
import MusicRoute from "./pages/MusicRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/music/*" element={<MusicRoute />} />
        </Routes>
    );
}

export default App;

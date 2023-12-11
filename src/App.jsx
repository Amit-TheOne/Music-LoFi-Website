import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MusicPage from "./pages/MusicPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music/*" element={<MusicPage />} />
        </Routes>
    );
}

export default App;

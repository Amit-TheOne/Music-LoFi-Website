// import reactLogo from './assets/react.svg
// import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MusicPage from "./pages/MusicPage";

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/music" element={<MusicPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

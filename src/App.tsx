
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import React from "react";
import UserLayout from "./pages/UserLayOut.tsx";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="aboutMe" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default App;

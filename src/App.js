import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About" // New About page component
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";

const theme = createTheme();

{/*const Home = () => <div><h1>Home Page</h1></div>; // Temporary Home Component
const Cars = () => <div><h1>Cars Page</h1></div>; // Temporary Cars Component
const Contact = () => <div><h1>Contact Page</h1></div>; // Temporary Contact Component*/}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/contact" element={<Contact />} />
                
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Carsale from "./Carsale";
import Client from "./Client";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
    const [theme, setTheme] = useState("light");
    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setBrandsData(data))
            .catch((error) => console.error(error));
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const themeStyles = {
        light: {
            backgroundColor: "#ffffff",
            color: "#000000",
        },
        dark: {
            backgroundColor: "#000000",
            color: "#ffffff",
        },
    };

    return (
        <div
            className="theme"
            style={themeStyles[theme]} // Apply the theme styles dynamically
        >
            <nav>
                <div className="flex">
                    <h1 className="font-bold">Theme</h1>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </nav>

            <div
                className="hero h-[500px] "
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/M5L1jLN/edit-banner.jpg)",
                }}></div>

            <div>
                <h1 className="text-4xl font-bold text-center mt-5 text-red-500">
                    Features categories
                </h1>
                <div className="text-center w-[1150px] mx-auto mt-5">
                    <div className="grid grid-cols-3 space-y-5">
                        {brandsData.map((brand) => (
                            <div
                                className="card card-compact w-[250px] h-[200px] shadow-xl mx-auto"
                                key={brand.id}>
                                <figure>
                                    <img
                                        className="h-[150px] w-full"
                                        src={brand.brand_img}
                                        alt=""
                                    />
                                </figure>
                                <h2 className="text-xl font-bold mt-2">
                                    {brand.brand_name}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Carsale />
            <Client />
            <Footer />
        </div>
    );
};

export default Home;

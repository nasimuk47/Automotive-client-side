/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import Carsale from "./Carsale";
import Client from "./Client";
import Footer from "./Footer";

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
        <div className="theme" style={themeStyles[theme]}>
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
                <div className="text-center mx-auto mt-5 sm:w-full lg:w-[1150px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {brandsData.map((brand) => (
                            <Link
                                to={`/brands/${brand.brand_name}`}
                                key={brand.id}>
                                <div className="card card-compact w-full sm:w-[250px] lg:w-[250px] h-[200px] shadow-xl mx-auto">
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
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Carsale></Carsale>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;

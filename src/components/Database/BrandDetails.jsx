/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const BrandDetails = () => {
    const { brand_name } = useParams();
    const [brandData, setBrandData] = useState(null);

    useEffect(() => {
        fetch("/fake.json")
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter(
                    (item) =>
                        item["Brand_Name"].toLowerCase() ===
                        brand_name.toLowerCase()
                );
                setBrandData(filteredData);
            })
            .catch((error) => console.error(error));
    }, [brand_name]);

    if (!brandData) {
        return <div>Loading...</div>;
    }

    // Check if there are no products for this brand
    if (brandData.length === 0) {
        return (
            <div className="text-center text-3xl font-bold">
                No products available for {brand_name}.
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                {brandData.map((item) => (
                    <div
                        className="card card-side h-[250px] border bg-base-100 shadow-xl"
                        key={item.id}>
                        <figure>
                            <img
                                className="h-[300px] w-[300px]"
                                src={item.img}
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body  ">
                            <p>Brand Name: {item["Brand_Name"]}</p>
                            <p>Type: {item.Type}</p>
                            <p>Price: ${item.Price}</p>
                            <p>Rating: {item.Rating}</p>

                            <button className="btn btn-xs bg-red-300 w-1/2">
                                Details
                            </button>
                            <button className="btn btn-xs bg-sky-300 w-1/2">
                                update
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h2 className="text-3xl font-bold text-center">
                    Our advertisement images
                </h2>
                <div className="carousel w-full h-[500px] mt-5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src=" https://i.ibb.co/wN9jdhL/slider3.jpg"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/wdPjQVJ/slider2.jpg"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/GJvpJWN/slider1.jpg"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/1XQ6Yqn/slider4.jpg"
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandDetails;

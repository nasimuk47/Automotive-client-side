/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const BrandDetails = () => {
    const { brand_name } = useParams();
    const [brandData, setBrandData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/card")
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter(
                    (item) =>
                        item["brand"].toLowerCase() === brand_name.toLowerCase()
                );
                setBrandData(filteredData);
            })
            .catch((error) => console.error(error));
    }, [brand_name]);

    if (!brandData) {
        return <div>Loading...</div>;
    }

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
                                src={item.photo}
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body  ">
                            <p>Brand Name: {item["brand"]}</p>
                            <p>Type: {item.type}</p>
                            <p>Price: ${item.price}</p>
                            <p>Rating: {item.rating}</p>

                            <button
                                onClick={() => handleDetailsClick(item._id)}
                                className="btn btn-xs bg-red-300 w-1/2">
                                Details
                            </button>
                            <button
                                onClick={() => handleUpdateClick(item._id)}
                                className="btn btn-xs bg-sky-300 w-1/2">
                                Update
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

    function handleDetailsClick(productId) {
        navigate(`/products/${productId}`);
    }

    function handleUpdateClick(productId) {
        navigate(`/products/update/${productId}`);
    }
};

export default BrandDetails;

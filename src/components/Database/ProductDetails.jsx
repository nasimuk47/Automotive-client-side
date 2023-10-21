/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const handleAddCard = (event) => {
        fetch("http://localhost:5000/Cards", {
            method: "POST",

            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify(),
        })
            .then((res) => res.json())

            .then((data) => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    const { productId } = useParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/card")
            .then((response) => response.json())
            .then((data) => {
                const product = data.find((item) => item._id === productId);
                setProductData(product);
            })
            .catch((error) => console.error(error));
    }, [productId]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="card w-[500px]  glass ">
                    <figure>
                        <img
                            className="w-full"
                            src={productData.photo}
                            alt="Product"
                        />
                    </figure>
                    <div className="card-body text-center bg-gray-200">
                        <p className="text-xl font-bold">
                            Brand Name: {productData.brand}
                        </p>
                        <p className="text-xl sans">
                            {productData.description}
                        </p>
                        <p className="text-xl font-sans">
                            Type: {productData.type}
                        </p>
                        <p className="text-xl sans">
                            Price: ${productData.price}
                        </p>
                        <p className="text-xl sans">
                            Rating: {productData.rating}
                        </p>

                        <div className="card-actions justify-end">
                            <button
                                onClick={handleAddCard}
                                className="btn btn-primary">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;

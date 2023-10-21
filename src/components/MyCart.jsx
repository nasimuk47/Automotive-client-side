/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth/Authprovider";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const userEmail = user?.email;

    const handleDelete = (id) => {
        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/myCart${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    console.log("deleted successfully");
                    // remove the user from the UI
                    window.location.reload();
                }
            });
    };

    useEffect(() => {
        fetch(
            "https://driver-zen-server-side-3gwzl4j11-nasimuk47.vercel.app/myCart"
        )
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter(
                    (i) => i?.userEmail === userEmail
                );
                setCartData(filteredData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [userEmail]);

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
            {cartData.length > 0 ? (
                <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    {cartData.map((product) => (
                        <div
                            key={product._id}
                            className="card card-side h-[270px] bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className="h-full"
                                    src={product.photo}
                                    alt={product.name}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.brand}</h2>

                                <p>Type: {product.type}</p>

                                <p>Price: {product.price}</p>

                                <p>Description: {product.description}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() =>
                                            handleDelete(product?._id)
                                        }
                                        className="btn btn-primary">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default MyCart;

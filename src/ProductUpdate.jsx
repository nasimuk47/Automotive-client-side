/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    const update = useLoaderData();

    const { _id, name, brand, type, price, description, rating, photo } =
        update;

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newUpdateCard = {
            name,
            brand,
            type,
            price,
            description,
            rating,
            photo,
        };

        console.log(newUpdateCard);

        fetch(
            `https://driver-zen-server-side-3gwzl4j11-nasimuk47.vercel.app/card/${_id}`,
            {
                method: "PUT",

                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify(newUpdateCard),
            }
        )
            .then((res) => res.json())

            .then((data) => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "car updated successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-4 sm:p-8 lg:p-24 w-full sm:w-10/12 mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-5">
                    Update Product
                </h2>
                <form onSubmit={handleUpdate}>
                    <div className="md:flex mb-8">
                        <div className="form-control w-full sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control w-full sm:w-1/2 mt-4 sm:mt-0">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="select select-bordered w-full">
                                <select name="brand" defaultValue={brand}>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Mercedes-Benz">
                                        Mercedes-Benz
                                    </option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Ford">Ford</option>
                                    <option value="BMW">BMW</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control w-full sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="select select-bordered w-full">
                                <select name="type" defaultValue={type}>
                                    <option value="car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="luxurious car">
                                        Luxurious car
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control w-full sm:w-1/2 mt-4 sm:mt-0">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="price"
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control w-full sm:w-1/2">
                            <label className="label">
                                <span className="label-text">
                                    Short Description
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={description}
                                    placeholder="Short Description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control w-full sm:w-1/2 mt-4 sm:mt-0">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={rating}
                                    placeholder="Rating"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Update Product"
                        className="btn btn-block bg-red-300"
                    />
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;

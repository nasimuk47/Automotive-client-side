/* eslint-disable no-unused-vars */
import React from "react";

const Carsale = () => {
    return (
        <div>
            <div className="bg-sky-400 w-[500] h-[500px] text-center mt-5 ">
                <div>
                    <h2 className="text-3xl font-bold mt-5">
                        <span className="text-4xl font-extrabold text-red-500">
                            Recent Car
                        </span>{" "}
                        For Sale
                    </h2>
                    <h2 className="text-xl font-serif text-gray-700">
                        Here are some recent car cheaks we~ve carried out
                    </h2>
                </div>

                <div className="flex space-x-3   mt-10  ml-10">
                    {/* 1st card */}

                    <div className="card w-[300px] h-[340px] bg-yellow-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold bg-yellow-400">
                                BJ12LBX
                            </h2>
                            <h2 className="text-xl font-bold">Toyota</h2>

                            <h2 className="font-bold">50,000$</h2>
                        </div>
                        <figure>
                            <img
                                className="w-full h-[200px]"
                                src="https://i.ibb.co/rbwm9gt/3.jpg"
                                alt="Shoes"
                            />
                        </figure>
                    </div>
                    {/* 1st card */}

                    <div className="card w-[300px] h-[340px]  bg-purple-300  shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold  bg-purple-400">
                                VK60OAB
                            </h2>
                            <h2 className="text-xl font-bold"> Ford</h2>
                            <h2 className="font-bold">69,000$</h2>
                        </div>
                        <figure>
                            <img
                                className="w-full h-[200px]"
                                src="https://i.ibb.co/y6mFGMP/1.jpg"
                                alt="Shoes"
                            />
                        </figure>
                    </div>
                    {/* 1st card */}

                    <div className="card w-[300px] h-[340px]  bg-red-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold  bg-red-400">
                                MA0589
                            </h2>
                            <h2 className="text-xl font-bold">Mercedes-Benz</h2>
                            <h2 className="font-bold">45,000$</h2>
                        </div>
                        <figure>
                            <img
                                className="w-full h-[200px]"
                                src="https://i.ibb.co/9v9X5yr/4.jpg"
                                alt="Shoes"
                            />
                        </figure>
                    </div>
                    {/* 1st card */}

                    <div className="card w-[300px] h-[340px]  bg-fuchsia-400  shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold bg-fuchsia-500">
                                NAS3OE2
                            </h2>
                            <h2 className="text-xl font-bold">Honda</h2>
                            <h2 className="font-bold">30,000$</h2>
                        </div>
                        <figure>
                            <img
                                className="w-full h-[200px] "
                                src="https://i.ibb.co/7CV3LCc/honda.jpg"
                                alt=""
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carsale;

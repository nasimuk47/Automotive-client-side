const Client = () => {
    return (
        <div className="mt-16  ">
            <h1 className="text-5xl font-semibold text-center  text-gray-600 ">
                <span className="font-bold"></span> Our Clients{" "}
                <span className="font-extrabold text-red-400"> Say</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 w-11/12 mx-auto ">
                {/* card 1-------------------------- */}
                <div className="card w-80  h-[500px] bg--100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/9rsWbMp/c1.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>
                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Olivia James
                    </h2>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            Driverzen, your trusted destination for buying cars.
                            We pride ourselves on providing top-quality
                            vehicles, outstanding customer service, and
                            financing options that suit your needs, all in one
                            place.
                        </p>
                    </div>
                </div>
                {/* card 1-------------------------- */}
                <div className="card w-80 h-[500px] bg-base-100 shadow-xl mt-5">
                    <figure className="px-10 pt-10">
                        <img
                            src=" https://i.ibb.co/HBvhjJL/c4.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>

                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Kenerds Dreamy
                    </h2>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            Is where car buying becomes an enjoyable experience.
                            Our vast inventory of vehicles spans different makes
                            and models, and our expert team is ready to guide
                            you through the process, ensuring you find the
                            perfect car for your lifestyle.
                        </p>
                    </div>
                </div>
                {/* card 1-------------------------- */}
                <div className="card w-80 h-[500px] bg-base-100 shadow-xl mt-5">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/smT0Z3L/c2.jpg"
                            alt="Shoes"
                            className="h-[150px] w-[150px] rounded-full"
                        />
                    </figure>
                    <h2 className="text-xl font-bold flex justify-center mt-3">
                        Emma Benjamin
                    </h2>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <div>
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                        <p>
                            {" "}
                            Driverzen offers a car buying experience like no
                            other. We re dedicated to putting you behind the
                            wheel of a vehicle that matches your desires, needs,
                            and budget, all while providing exceptional customer
                            care.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;

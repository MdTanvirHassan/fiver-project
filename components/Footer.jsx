import React from 'react';


const Footer = () => {
    return (
        <section>
            <footer className=" bg-gray-100 text-black ">
                <div className="container px-5 pt-12 mx-auto gap-1 md:gap-5 grid md:grid-cols-4  md:items-center  pb-0  ">
                    <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
                        <div className=" px-8">
                            <h3 className="font-bold  text-2xl  mb-2">
                                IBID.CO
                            </h3>
                            <p>contact@example.com</p>
                            <p>+1-541-754-3010</p>
                        </div>
                    </div>
                    <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
                        <div className=" px-8 ">
                            <h3 className="font-bold  text-xl  mb-2">
                                Usefull Links
                            </h3>
                            <nav className="list-none ">
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        Mobile Phone
                                    </a>
                                </li>
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        Laptop
                                    </a>
                                </li>
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        HeadPhones
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
                        <div className=" px-8 ">
                            <h3 className="font-bold  text-xl  mb-2">
                                Our policy
                            </h3>
                            <nav className="list-none">
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        Home Page
                                    </a>
                                </li>
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a className=" text-md hover:text-gray-800">
                                        Services
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-0 justify-center md:items-center pb-5  md:mt-0  text-left">
                        <div className=" px-8 ">
                            <h3 className="font-bold  text-xl  mb-4">
                                Subscribe To Newsletter
                            </h3>
                            <form action="" className='flex justify-center'>
                                <div className="w-full ">
                                    <input
                                        type="email"
                                        className="bg-white text-start border border-gray-300 text-gray-900 text-sm rounded-lg shadow-sm  block w-full py-2 px-5"
                                        placeholder="Submit Your Email Address"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-gray-500 via-gray-500 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-2"
                                >
                                    Subscribe
                                </button>
                            </form>

                        </div>

                    </div>

                </div>
            </footer>

        </section>
    );
}

export default Footer;

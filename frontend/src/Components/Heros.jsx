import { Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Heros = ({ text }) => {
    return(
        <div className="container mt-4 min-h-screen mx-auto px-5 md:px-0">
            <Space align="center" direction="vertical" className="py-3">
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-center items-center flex-col w-4/5 text-center">
                        <h1 className="text-xl font-bold tracking-wide text-[#02264A] md:text-4xl">{text.title}</h1>
                        <h2 className="text-lg font-reguler text-[#201F1F] tracking-wide w-full mt-4 md:text-xl">{text.desc} <span className="font-semibold">{text.actionDesc}</span></h2>
                        <div className="flex w-8/12 justify-between my-6">
                            {text.listInformation.map((list, index) => {
                                return <h4
                                    className="font-semibold tracking-wide text-lg"
                                    key={index}
                                >
                                    {list}
                                </h4>
                            })}
                        </div>
                        <Link
                            to="/class"
                            className="px-8 py-4 bg-[#FFCC00] tracking-wide mt-2 text-base text-[#252525] font-semibold rounded-3xl transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                        >
                            {text.btn}
                        </Link>
                    </div>
                </div>
                <img src="/assets/hero3.png" alt="img" className="sm:w-3/4 mx-auto w-full"/>
            </Space>
        </div>
    )
}

export default Heros
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const  Prospect = ({text}) => {
    const {data, langs} = useSelector(state => state.LangReducer);

    return (
        <div className='container mx-auto pt-16 pb-24 px-5 relative w-full md:px-16'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='w-full p-6 flex max-h-auto gap-12 rounded-[32px] bg-white sm:p-8' style={{ backgroundImage: "url('/assets/texture-prospect.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='w-4/12 hidden items-center justify-start lg:flex'>
                        <img src="/assets/prospect3.png" alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col justify-center text-[#02264A] w-full lg:w-8/12'>
                        <h2 className='font-semibold text-xl sm:text-2xl md:text-[32px]'>{text.title}</h2>
                        <span className='max-w-max my-6'>
                            <h1 className='text-[#3377FF] font-semibold text-4xl smtext-5xl md:text-6xl'>{text.tags}</h1>
                            <p className='text-base font-medium text-[#8493AC] w-auto text-end md:text-lg'>{text.source}</p>
                        </span>
                        <div className='flex flex-col w-full'>
                            <h2 className='text-[#8493AC] text-2xl'>{text.head}</h2>
                            <div className='grid gap-2 mt-4 grid-cols-2 md:grid-cols-3 xl:gap-4'>
                                {text.careers.map((career, index) => (
                                    <h2 className='text-sm sm:text-base'>{career}</h2>
                                ))}
                            </div>
                        </div>
                        <div className='flex items-center mt-8 gap-4'>
                            <Link to='/class'>
                                <button
                                    className="px-8 py-4 w-fit bg-[#FFCC00] tracking-wide mt-2 text-xs text-[#252525] font-semibold rounded-3xl transition-all duration-300 hover:bg-yellow-500 hover:text-black sm:text-sm lg:text-base"
                                >
                                    {langs ? "Explore Our Program" : "Jelajahi Program Kami"}
                                </button>
                            </Link>
                            <Link to='/products'>
                                <button
                                    className="px-8 py-4 w-fit border-2 border-[#8493AC] tracking-wide mt-2 text-xs text-[#252525] font-semibold rounded-3xl transition-all duration-300 hover:bg-yellow-500 hover:text-black sm:text-sm lg:text-base"
                                >
                                    {langs ? "Explore Our Product" : "Jelajahi Produk Kami"}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Prospect
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="">
                {/* ---------First section */}
                <div className="hidden justify-between text-3xl text-mainColor py-5 lg:w-contain lg:mx-auto lg:flex">
                    <div className="flex flex-col items-center">
                        <p className="">Market Cap</p>
                        <p className="font-semibold">$107,288,409</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="">24H Volume</p>
                        <p className="font-semibold">$2,878,845</p>
                    </div>
                </div>
                {/* ---------Second section */}
                <div className=' bg-mainColor relative'>
                    <div className="flex h-[120px] px-4 items-center justify-between lg:w-contain lg:px-0 lg:mx-auto">
                        <div className="translate-y-12 pr-20">
                            <img src={logo} className='w-[70px] h-[70px] border-[3px] border-white rounded-full md:w-[150px] md:h-[150px]' alt="" />
                        </div>
                        {/* ---------Nav for large screen */}
                        <div className="hidden items-center gap-[270px] lg:flex">
                            <div className="uppercase flex gap-5 text-lg text-white font-bold ">
                                <a href="" className="">how to buy</a>
                                <a href="" className="">ecosystem</a>
                                <a href="" className="">coq cards</a>
                                <a href="" className="">memes</a>
                                <a href="" className="">merch</a>
                            </div>
                            <div className="bg-white py-3 px-7 uppercase font-bold">
                                <a href="" className=''>buy now</a>
                            </div>
                        </div>
                        {/* ---------Nav for MOBILE screen */}
                        <div className="md:hidden">
                            <button
                                className='w-10 h-6 flex flex-col justify-between'>
                                <div className="w-10 h-[2px] bg-white rounded origin-left"></div>
                                <div className="w-10 h-[2px] bg-white rounded"></div>
                                <div className="w-10 h-[2px] bg-white rounded origin-left"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
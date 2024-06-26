import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="">
                <div className="flex justify-between text-3xl text-mainColor py-5 lg:w-contain lg:mx-auto">
                    <div className="flex flex-col items-center">
                        <p className="">Market Cap</p>
                        <p className="font-semibold">$107,288,409</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="">24H Volume</p>
                        <p className="font-semibold">$2,878,845</p>
                    </div>
                </div>
                <div className=' bg-mainColor relative'>
                    <div className="flex h-[120px]  items-center justify-items-start lg:w-contain lg:mx-auto">
                        <div className="translate-y-12 pr-20">
                            <img src={logo} className='w-[150px] h-[150px] border-[3px] border-white rounded-full' alt="" />
                        </div>
                        <div className="flex gap-[270px]">
                            <div className="uppercase flex gap-5 text-lg text-white font-bold ">
                                <a href="" className="">how to buy</a>
                                <a href="" className="">ecosystem</a>
                                <a href="" className="">coq cards</a>
                                <a href="" className="">memes</a>
                                <a href="" className="">merch</a>
                            </div>
                            <div className="">
                                <a href="">buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
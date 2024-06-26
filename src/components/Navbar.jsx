import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="">
                <div className="flex justify-between py-5 lg:w-contain lg:mx-auto">
                    <div className="">
                        <p className="">Market Cap</p>
                        <p className="">$107,288,409</p>
                    </div>
                    <div className="">
                        <p className="">24H Volume</p>
                        <p className="">$2,878,845</p>
                    </div>
                </div>
                <div className="">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
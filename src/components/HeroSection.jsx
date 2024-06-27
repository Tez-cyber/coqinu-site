import Hero from '../assets/hero.png'
import avalanche from '../assets/avalanchelogo.png'

const HeroSection = () => {
    return (
        <div className='text-mainColor py-10 lg:w-contain lg:mx-auto lg:py-20'>
            {/* ===== First section ===== */}
            <div className="flex gap-3">
                <div className="my-10 mx-4 lg:w-[75%]">
                    <div className="flex items-end py-5 px-5  bg-[#f7e18b] ">
                        <h2 className="text-3xl uppercase leading-relaxed lg:text-6xl">
                            life is <span className='font-bold'>better</span> when you have some
                            <span className='font-bold pl-2'>coq inu</span>
                        </h2>
                        <img src={avalanche} className='w-[40px] h-[40px] translate-x-[-60px] lg:w-[50px] lg:h-[50px]  lg:translate-x-[-120px] lg:translate-y-[-20px]' alt="" />
                    </div>

                    <p className="text-xl leading-relaxed text-justify pt-5 lg:text-3xl ">
                        Born from collective frenship, deeply rooted in
                        memetics and humor, <span className='font-bold'>Coq Inu</span> is not your average meme
                        coin — it's a way of life
                    </p>
                </div>
                {/* === Hero Image === */}
                <div className="w-1/3 hidden lg:flex">
                    <img src={Hero} className='w-[80%] h-[80%] ml-5' alt="" />
                </div>
            </div>
            {/* ===== Icon section ===== */}
            <div className=""></div>
        </div>
    )
}

export default HeroSection
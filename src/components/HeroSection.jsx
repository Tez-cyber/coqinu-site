import Hero from '../assets/hero.png'
import twitter from '../assets/X.png'
import telegram from '../assets/tg.png'
import dex from '../assets/dexscreen.png'
import coinmarket from '../assets/coinmarket.png'
import coingecko from '../assets/coingecko.png'
import snowrace from '../assets/snowrace.png'
import avalanche from '../assets/avalanchelogo.png'

const HeroSection = () => {
    return (
        <div className='text-mainColor py-10 px-4 lg:w-contain lg:mx-auto lg:py-20'>
            {/* ===== First section ===== */}
            <div className="flex gap-3">
                <div className="my-10  lg:w-[75%] lg:mx-0">
                    <div className="flex items-end py-5 px-5  bg-[#f7e18b] ">
                        <h2 className="text-3xl uppercase leading-loose lg:text-6xl">
                            life is <span className='font-bold'>better</span> when you have some
                            <span className='font-bold pl-2'>coq inu</span>
                        </h2>
                        <img src={avalanche} className='w-[50px] h-[50px] translate-x-[-60px] lg:w-[50px] lg:h-[50px]  lg:translate-x-[-120px] lg:translate-y-[-7px]' alt="" />
                    </div>

                    <p className="text-xl leading-relaxed text-justify pt-5 lg:text-3xl ">
                        Born from collective frenship, deeply rooted in
                        memetics and humor, <span className='font-bold'>Coq Inu</span> is not your average meme
                        coin — it's a way of life
                    </p>
                </div>
                {/* === Hero Image === */}
                <div className="w-1/3 hidden lg:flex">
                    <img src={Hero} className='w-[90%] h-[90%] ml-10' alt="" />
                </div>
            </div>
            {/* ===== Icon section ===== */}
            <div className="flex justify-between lg:w-contain lg:mx-auto">
                <a href="" className="w-[30px] h-[30px]"><img src={twitter} alt="" className="" /></a>
                <a href="" className="w-[30px] h-[30px]"><img src={telegram} alt="" className="" /></a>
                <a href="" className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"><img src={dex} alt="" className="" /></a>
                <a href="" className="w-[30px] h-[30px]"><img src={coinmarket}alt="" className="" /></a>
                <a href="" className="w-[30px] h-[30px]"><img src={coingecko} alt="" className="" /></a>
                <a href="" className="w-[30px] h-[30px]"><img src={snowrace} alt="" className="" /></a>
            </div>
        </div>
    )
}

export default HeroSection
import { arrowRight } from "../assets/icons"
import Buttons from "../components/Buttons"
import { statistics } from "../constants"

export const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 mt-8">
      <p className="text-xl font-montserrat font-semi-bold mt-6"> Our Best Running Collection</p>
      <h1 className="mt-6 font-anton text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          the ultimate arrival</span>
          <br />
        <span className="inline-block mt-3 text-blue-950 "> PUREBOOST 5 ///
        </span>
      </h1>
      <p className="font-montserrat text-slate-700 text-lg leading-8 mt-6 mb-14 sm:max-w-sm:">The Ultimate Lightweight, Breathable Running Shoes Made with Recycled Materials</p>
      <Buttons label="Shop Now"
      iconURL={arrowRight}/>
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>  
    </section>
  )
}
export default Hero

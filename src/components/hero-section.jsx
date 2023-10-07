import vektor from "../assets/vektor_web_profile_heroSerction.png"

const Hero = () => {
    return(
        <>
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 md:pt-20">
        <div className="flex items-center pt-10 md:w-1/2 md:pt-5 md:pl-10">
            <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
                <img src={vektor} />
            </div>
            </div>
        </div>
        <div className="flex items-center md:w-1/2 md:pt-5 md:pr-10">
            <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Hi, Im <span></span>
                <span className="font-bold text-primary">Muhamad Dava Dwi Saputra</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Im a Frontend Web Developer
            </p>
            <div className="mt-4 sm:flex md:mt-8">
                <div className="rounded-md shadow"><a href="#portofolio" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary border border-transparent rounded-md hover:bg-primary/70 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                    Portofolio
                </a></div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Hero;
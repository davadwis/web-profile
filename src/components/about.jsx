import profilePicture from "../assets/Picsart_23-09-06_09-53-54-196.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 pt-20 mt-24 mb-40"
      >
        <div className="flex items-center pt-10 md:w-1/2 md:pt-5 md:pl-10">
          <div className="text-justify">
            <h2 className="text-4xl text-center font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              <span className="font-semibold text-primary">About Me</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Hello, I am a fresh graduate from Gunadarma University with a
              degree in Informatics, aspiring to become a Web Front-End
              Developer. I continue to develop myself by participating in
              bootcamps, e-learning, short courses, and self-studying in the
              field of web development and other areas. I have experience in
              creating websites using ReactJs, particularly focused on job
              vacancy websites obtained from an intensive ReactJs bootcamp at
              Sanbercode. I use this website as my resume and portofolio.
            </p>
            <div className="mt-4 md:mt-8 m-auto justify-center flex">
              <div className="rounded-md shadow">
                <button>
                  <a
                    href="https://drive.google.com/file/d/1HZ6eBOlXkc6Lx2qaEs6NWmZuHWPf9vK1/view?usp=sharing"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary border border-transparent rounded-md hover:bg-primary/70 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                  >
                    Download My CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-10 md:w-1/2 md:pt-5 md:pl-10">
          <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
              <img src={profilePicture} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

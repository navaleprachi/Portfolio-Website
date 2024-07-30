import { HERO_CONTENT } from "../../constants";
import profileImage from "../../assets/PrachiNavaleProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-6xl">
              Hi, I am Prachi Navale
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 ml-auto">
          <div className="flex justify-center lg:justify-end">
            <img
              style={{ height: "450px" }}
              src={profileImage}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

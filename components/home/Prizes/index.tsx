import Image from "next/image";
import arch_cup from "@/public/images/home/arch_cup.png";
import first from "@/public/images/home/gold_medal.png";
import second from "@/public/images/home/silver_medal.png";
import third from "@/public/images/home/bronze_medal.png";

const Prizes = () => {
  return (
    <section className="py-6 md:py-14 text-white">
      <div className="md:flex items-center justify-center">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h2 className=" font-semibold mb-4 text-center md:text-left">
            Prizes and
            <span className="text-purple-1 block">Rewards</span>
          </h2>
          <p className="font-book text-sm font-montserrat text-center md:text-left md:mr-2 leading-7 my-4 mx-7 md:mx-0">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className="px-5 md:flex md:justify-between md:items-center py-6 gap-5 lg:gap-2 max-w-screen-xl mx-auto">
        <div className=" md:flex items-center justify-end md:w-2/5">
          <Image
            src={arch_cup}
            alt="Hitting the target and winning a golden cup"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex items-end gap-3 md:gap-6 font-montserrat  mt-28 justify-center">
          <div className="bg-purple-1/10 border border-purple-1 px-2 md:px-6 p-4 md:p-6 pt-12 md:pt-28 relative text-center rounded-md md:rounded-lg hover:translate-y-4 transition-transform duration-500 ease-in">
            <div className="absolute top-[-30%] right-0 left-0">
              <Image
                src={second}
                alt="Medal for second runner up"
                className="w-full hover:scale-105 transition-transform duration-500 ease-in"
              />
            </div>
            <span className="block text-xs md:text-4xl font-bold">2nd</span>
            <span className="block text-xs md:text-2xl font-semibold">
              Runner
            </span>
            <span className="block text-purple-1 font-bold text-sm md:text-3xl">
              N300,000
            </span>
          </div>
          <div className="bg-purple-3/10 border border-purple-3 px-2 md:px-6  p-4 md:p-6 pt-12 md:pt-28 relative text-center rounded-md md:rounded-lg hover:-translate-y-4 transition-transform duration-500 ease-in mb-[-20px]">
            <div className="absolute top-[-50%] right-[-20%] left-[-20%]">
              <Image
                src={first}
                alt="Medal for first runner up"
                className="w-full hover:scale-105 transition-transform duration-500 ease-in"
              />
            </div>
            <span className="block text-xs md:text-4xl font-bold">1st</span>
            <span className="block text-xs md:text-2xl font-semibold">
              Runner
            </span>
            <span className="block text-purple-3 font-bold text-sm md:text-3xl mt-2">
              N400,000
            </span>
          </div>
          <div className="bg-purple-1/10 border border-purple-1 px-2 md:px-6  p-4 md:p-6 pt-12 md:pt-28 relative text-center rounded-md md:rounded-lg hover:translate-y-4 transition-transform duration-500 ease-in">
            <div className="absolute top-[-30%] right-[2%] left-[2%]">
              <Image
                src={third}
                alt="Medal for third runner up"
                className="w-full hover:scale-105 transition-transform duration-500 ease-in "
              />
            </div>
            <span className="block text-xs md:text-4xl font-bold">3rd</span>
            <span className="block text-xs md:text-2xl font-semibold">
              Runner
            </span>
            <span className="block text-purple-1 font-bold text-sm md:text-3xl">
              N150,000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;

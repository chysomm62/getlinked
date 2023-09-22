import Image from "next/image";
import bulb from "@/public/images/home/bulb_idea.png";

const Introduction = () => {
  return (
    <section className="py-6 md:py-14 text-white line">
      <div className="px-5 md:flex md:justify-between md:items-center py-6 gap-5 lg:gap-16 max-w-screen-xl mx-auto lg:px-10 ">
        <div className="flex-1 md:flex items-center justify-end">
          <Image src={bulb} alt="Bulb transmitting ideas" className="w-full" />
        </div>
        <div className="flex-1 mt-8">
          <h2 className=" font-semibold mb-4 text-center lg:text-left">
            Introduction to getlinked
            <span className="text-purple-1 block">tech Hackathon 1.0</span>
          </h2>
          <p className="font-book text-sm font-montserrat text-center lg:text-left lg:mr-2 leading-7">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

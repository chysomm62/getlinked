import Image from "next/image";
import bulb from "@/public/images/home/bulb_idea.png";

const Introduction = () => {
  return (
    <section className="px-5 py-12 md:py-20 text-white max-w-screen-lg mx-auto  bg-grey-1">
      <div className="md:flex md:justify-between md:items-center py-6 gap-5 lg:gap-16">
        <div className="flex-1 md:flex items-center justify-end">
          <Image src={bulb} alt="Bulb transmitting ideas" className="w-full" />
        </div>
        <div className="flex-1">
          <h2 className=" font-semibold mb-4">
            Introduction to getlinked
            <span className="text-purple-1 block">tech Hackathon 1.0</span>
          </h2>
          <p className="font-book text-sm font-montserrat mb-10 text-center lg:text-left lg:mr-2 leading-7">
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

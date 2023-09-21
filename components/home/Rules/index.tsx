import Image from "next/image";
import lady from "@/public/images/home/sitting_lady.png";

const Rules = () => {
  return (
    <section className="py-6 md:py-14 text-white  bg-grey-1 line">
      <div className="px-5 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center py-6 gap-5 lg:gap-16 max-w-screen-lg mx-auto">
        <div className="flex-1">
          <h2 className=" font-semibold mb-4 text-center lg:text-left">
            Rules and
            <span className="text-purple-1 block"> Guidelines</span>
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
        <div className="flex-1 md:flex items-center justify-end">
          <Image
            src={lady}
            alt="lady sitting and pressing her tablet"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Rules;

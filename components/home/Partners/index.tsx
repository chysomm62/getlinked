import liberty from "@/public/images/home/Libertycompanylogo.png";
import liberty_ from "@/public/images/home/Libertycompanylogo_.png";
import paybox from "@/public/images/home/Paybox.png";
import vizual from "@/public/images/home/Vuzual.png";
import winwise from "@/public/images/home/Winwise.png";
import wisper from "@/public/images/home/wisper .png";
import Image from "next/image";

const images = [liberty, liberty_, winwise, wisper, paybox, vizual];

const Partners = () => {
  return (
    <section className="py-6 md:py-14 text-white line px-5">
      <div className=" max-w-screen-xl mx-auto  ">
        <div className=" mt-8 px-8">
          <h2 className=" font-semibold mb-4 text-center">
            Partners and Sponsors
          </h2>
          <p className="font-book text-sm font-montserrat text-center  leading-7 my-4 w-80 mx-auto ">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border border-purple-1 p-6 md:p-12 rounded mt-6 md:mt-10 flex items-center justify-center px-10">
          <div className="grid grid-cols-3 max-w-screen-md mx-auto ">
            {images.map((image, index: number) => (
              <div
                key={index}
                className="p-5 md:p-10 flex items-center justify-center relative"
              >
                {index === 0 || index === 1 || 2 ? (
                  <div className="absolute bottom-0 border-t border-purple-1 left-3 right-3"></div>
                ) : (
                  ""
                )}

                {/* {(index === 0 || 1 || 3 || 4) && (
                  <div className="absolute right-0 bottom-0 top-0 border-r border-purple-1"></div>
                )} */}

                <Image
                  src={image}
                  alt={`company logo ${image}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

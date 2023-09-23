import Image from "next/image";
import man_on_cloud from "@/public/images/home/man_on_cloud.png";
import { FAQsData } from "@/lib/variables/FAQsData";
import { BsPlus } from "react-icons/bs";
import Button from "@/components/common/Button";
import { FC } from "react";

interface faqProp {
  faqRef: any;
}
const FAQs: FC<faqProp> = ({ faqRef }) => {
  return (
    <section ref={faqRef} className="py-6 md:py-14 text-white line">
      <div className="px-5 md:flex md:justify-between md:items-center py-6 gap-5 lg:gap-16 max-w-screen-xl mx-auto  ">
        <div className="flex-1 mt-8">
          <h2 className=" font-semibold mb-4 text-center lg:text-left">
            Frequently Ask
            <span className="text-purple-1 block">Question </span>
          </h2>
          <p className="font-book text-sm font-montserrat text-center lg:text-left lg:mr-2 leading-7 my-4">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          {FAQsData.map((data, index: number) => (
            <div
              key={`${data.question}-${index}`}
              className="py-3 flex items-end justify-between gap-4 border-b border-purple-1"
            >
              <p className="font-book text-xs md:text-sm leading-5 font-montserrat">
                {data.question}
              </p>
              <Button className="p-0">
                <BsPlus color="rgba(212, 52, 254, 1)" size={20} />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex-1 md:flex items-center justify-end">
          <Image
            src={man_on_cloud}
            alt="A man sitting and thinking on a cloud"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;

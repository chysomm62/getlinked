import Image from "next/image";
import man_woman from "@/public/images/home/man_woman.png";
import Button from "@/components/common/Button";
import { CriteriaData } from "@/lib/variables/Criteria";

const Criteria = () => {
  const clickHandler = () => {};

  return (
    <section className="py-6 md:py-14 text-white line">
      <div className="px-5 md:flex md:justify-between md:items-center py-6 gap-5 lg:gap-16 max-w-screen-xl mx-auto lg:px-10">
        <div className="flex-1 md:flex items-center justify-end">
          <Image
            src={man_woman}
            alt="A man and a woman reading a book and a chart"
            className="w-full"
          />
        </div>
        <div className="flex-1 mt-8">
          <h2 className=" font-semibold mb-4 text-center lg:text-left">
            Judging Criteria
            <span className="text-purple-1 block">Key attributes </span>
          </h2>
          {CriteriaData.map((data) => (
            <p
              key={data.header}
              className="font-book text-sm font-montserrat text-center lg:text-left lg:mr-2 leading-7 my-4"
            >
              <span className="text-purple-1">{data.header}</span>
              {data.content}
            </p>
          ))}

          <div className="flex items-center gap-2 justify-center md:justify-start my-5">
            <Button action={clickHandler} className="btn-contained">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;

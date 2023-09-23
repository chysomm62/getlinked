import Image from "next/image";
import man_on_cloud from "@/public/images/home/man_on_cloud.png";
import { TimelineData } from "@/lib/variables/Timeline";
import { FC } from "react";

interface timelineProp {
  timelineRef: any;
}

const Timeline: FC<timelineProp> = ({ timelineRef }) => {
  return (
    <section className="py-6 md:py-14 text-white" ref={timelineRef}>
      <div className=" max-w-screen-lg mx-auto  ">
        <div className=" mt-8 px-8">
          <h2 className=" font-semibold mb-4 text-center">Timeline</h2>
          <p className="font-book text-sm font-montserrat text-center  leading-7 my-4 w-80 mx-auto ">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          {TimelineData.map((data, index) => (
            <div
              key={`${data.header}-${index}`}
              className="py-3 flex items-stretch gap-4 "
            >
              <div className="hidden md:flex flex-col justify-end pb-1 flex-1">
                {(index + 1) % 2 == 0 ? (
                  <h4 className="text-purple-1 font-montserrat text-right">
                    {data.time}
                  </h4>
                ) : (
                  <div>
                    <h4 className="text-purple-1 font-montserrat text-right mb-2">
                      {data.header}
                    </h4>
                    <p className="font-book text-xs md:text-base leading-5 font-montserrat text-right">
                      {data.content}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <div className="mx-auto mb-2 border-r md:border-r-4 border-purple-1 h-16 w-[1px] md:w-1 md:h-24"></div>
                <div
                  className={`gradient-background h-6 md:h-12 w-6 md:w-12 flex items-center justify-center rounded-full `}
                >
                  <p className={` leading-none text-xs md:text-2xl font-bold`}>
                    {index + 1}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between md:justify-end pb-1 flex-1">
                <div className={(index + 1) % 2 == 1 ? `md:hidden` : ""}>
                  <h4 className="text-purple-1 font-montserrat mb-2">
                    {data.header}
                  </h4>
                  <p className="font-book text-xs md:text-base leading-5 font-montserrat line-clamp-3">
                    {data.content}
                  </p>
                </div>
                <h4
                  className={`${
                    (index + 1) % 2 == 0 && "md:hidden"
                  } text-purple-1 font-montserrat`}
                >
                  {data.time}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

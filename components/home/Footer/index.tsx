import { FC } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { refTypes } from "@/lib/types/ref.types";
import { MdLocationOn } from "react-icons/md";

const Footer: FC<refTypes> = ({
  timelineRef,
  overviewRef,
  faqRef,
  contactRef,
}) => {
  const footerLinks1 = [
    { href: "/", label: "Overview", active: false, reff: overviewRef },
    { href: "/", label: "Timeline", active: false, reff: timelineRef },

    { href: "/", label: "FAQs", active: false, reff: faqRef },
    { href: "/", label: "Contact", active: false, reff: contactRef },
  ];

  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (reff: any) => {
    handleScroll(reff?.current);
  };

  return (
    <footer
      ref={contactRef}
      className="max-w-screen-xl mx-auto text-white font-book bg-blue-3 py-3  px-5 overflow-x-hidden"
    >
      <div className=" py-6 md:py-16">
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-20">
          <div className="py-4 flex flex-col justify-between items-start md:w-2/5">
            <div>
              <div className="mb-2 flex items-center ">
                <Link href="/">
                  <span className="text-white text-base font-bold md:text-4xl font-clashDisplay">
                    get<span className="text-purple-1">linked</span>
                  </span>
                </Link>
              </div>
              <p className="text-white text-sm md:text-base font-light leading-7">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="flex gap-0 items-center mt-7 md:mt-0">
              <p className="pr-3 border-r-2 border-purple-1">Terms of Use</p>
              <p className="px-3">Privacy Policy</p>
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center ">
              <h4 className="text-purple-1 mb-2 md:mb-4 font-medium text-xl md:text-2xl ">
                Useful Links
              </h4>
            </div>
            <ul>
              {footerLinks1.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-sm md:text-base font-normal mb-3 text-white hover:text-purple-1  transition duration-300 ease-in-out"
                  onClick={() => handleClick(item.reff)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="flex justify-start gap-2 md:gap-3 lg:gap-6 mb-5 items-center mt-4 md:mt-6">
              <p className="text-purple-1 font-semibold text-base md:text-lg ">
                Follow us
              </p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-xl md:text-3xl hover:text-purple-1  transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill className="text-white text-xl md:text-3xl hover:text-purple-1  transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white text-xl md:text-3xl hover:text-purple-1  transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white text-xl md:text-3xl hover:text-purple-1  transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center">
              <h4 className="text-purple-1 mb-2 md:mb-4 font-medium text-xl md:text-2xl ">
                Contact Us
              </h4>
            </div>
            <Link href="tel:+234670765344">
              <p className="text-sm md:text-base font-normal mb-2 text-white flex items-start gap-3">
                <BiSolidPhoneCall className="text-white text-lg md:text-2xl" />
                +234 670765344
              </p>
            </Link>
            <p className="text-sm md:text-base font-normal mb-2 text-white flex items-start gap-3 mt-4">
              <MdLocationOn className="text-white text-lg md:text-2xl " />
              27, Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-6">
        <div>
          <p className="text-white font-light">
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

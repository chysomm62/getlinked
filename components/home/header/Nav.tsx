import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState, FC } from "react";
import Button from "@/components/common/Button";
import { refTypes } from "@/lib/types/ref.types";

const Nav: FC<refTypes> = ({
  homeRef,
  aboutRef,
  coursesRef,
  testimonialRef,
  communityRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", label: "Timeline", active: true, reff: homeRef },
    { href: "/", label: "Overview", active: false, reff: aboutRef },
    { href: "/", label: "FAQs", active: false, reff: coursesRef },
    { href: "/", label: "Contact", active: false, reff: coursesRef },
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
    setIsOpen(!isOpen);
  };

  const applyHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="line font-montserrat">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 lg:h-28 pt-4 pl-8">
        <Link href="/">
          <span className="text-white text-base font-bold md:text-4xl font-clashDisplay">
            get<span className="text-purple-1">linked</span>
          </span>
        </Link>

        <div
          className={
            isOpen
              ? " fixed top-0 left-0 right-0 w-full flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between z-10 bg-purple-2 py-40"
              : "translate-y-[2000px] lg:translate-y-0 fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between"
          }
        >
          <ul className="flex flex-col space-y-5 mb-16 lg:space-y-0 lg:flex-row lg:mb-0 lg:ml-10 lg:justify-end lg:items-center gap-16 lg:flex-1 text-left w-full px-9 lg:px-1">
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => handleClick(link.reff)}
                className={
                  link.active
                    ? "font-medium text-lg text-white hover:text-gray-1 cursor-pointer"
                    : "font-medium text-lg text-white hover:text-gray-1 cursor-pointer"
                }
              >
                {link.label}
              </li>
            ))}
            <Button action={applyHandler} className="btn-contained w-fit">
              Register
            </Button>
          </ul>
        </div>

        <button
          className="relative z-10 lg:hidden mr-5 px-3"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <div className="border border-purple-1 rounded-full p-1">
              <MdClose color="#FFFFFF" fontSize="25px" />
            </div>
          ) : (
            <FaBars color="#FFFFFF" fontSize="25px" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

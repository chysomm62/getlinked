import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useState, FC } from "react";
import Button from "@/components/common/Button";
import { refTypes } from "@/lib/types/ref.types";
import { MenuIcon } from "@/components/common/Icons";

interface props {
  timelineRef: any;
  overviewRef: any;
  faqRef: any;
  contactRef: any;
  navbarRef: any;
}
const Nav: FC<props> = ({
  timelineRef,
  overviewRef,
  faqRef,
  contactRef,
  navbarRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const links = [
    { href: "/", label: "Timeline", active: false, reff: timelineRef },
    { href: "/", label: "Overview", active: false, reff: overviewRef },
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
    setIsOpen(!isOpen);
  };

  const applyHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handlePageScroll() {
    if (window.scrollY > 30) {
      setScroll(true);
      navbarRef.current!.style.boxShadow =
        "0px 0px 15px 0px rgba(144, 58, 255, 1)";
    } else {
      setScroll(false);
      navbarRef.current!.style.boxShadow = "none";
    }
  }

  typeof window !== "undefined" &&
    window.addEventListener("scroll", handlePageScroll);

  return (
    <nav
      className={`line font-montserrat sticky top-0 bg-blend-multiply z-20 ${
        scroll ? "bg-purple-2" : "bg-transparent"
      }`}
      ref={navbarRef}
    >
      <div
        className={`max-w-screen-xl mx-auto flex justify-between items-center pt-4 pl-8 px-5 ${
          scroll ? "h-16 lg:h-20" : "h-20 lg:h-28"
        }`}
      >
        <Link href="/">
          <span className="text-white text-base font-bold md:text-4xl font-clashDisplay">
            get<span className="text-purple-1">linked</span>
          </span>
        </Link>

        <div
          className={
            isOpen
              ? " fixed top-0 left-0 right-0 w-full flex items-center justify-center flex-col md:static md:h-auto md:flex-row md:justify-between z-10 bg-purple-2 lg:bg-transparent py-40"
              : "translate-y-[2000px] md:translate-y-0 fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col md:static md:h-auto md:flex-row md:justify-between"
          }
        >
          <ul className="flex flex-col space-y-5 mb-16 md:space-y-0 md:flex-row md:mb-0 md:ml-10 md:justify-end md:items-center gap-3 md:gap-10 lg:gap-16 md:flex-1 text-left w-full px-9 md:px-1">
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => handleClick(link.reff)}
                className={
                  link.active
                    ? "font-medium text-lg text-purple-1 hover:text-purple-1 cursor-pointer transition duration-300 ease-in-out"
                    : "font-medium text-lg text-white hover:text-purple-1 cursor-pointer transition duration-300 ease-in-out"
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
          className="relative z-10 md:hidden mr-5 px-3"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <div className="border border-purple-1 rounded-full p-1">
              <MdClose color="#FFFFFF" fontSize="25px" />
            </div>
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

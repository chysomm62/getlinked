import { FC } from "react";
import HeroImage from "@/public/images/hero/hero.png";
import VirtualScreen from "@/public/images/hero/virtual_screen.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./Hero.module.css";
import Nav from "./Nav";
import { refTypes } from "@/lib/types/ref.types";
import Button from "@/components/common/Button";

const Hero: FC<refTypes> = ({
  homeRef,
  aboutRef,
  coursesRef,
  testimonialRef,
  communityRef,
}) => {
  const clickHandler = () => {};
  return (
    <header ref={homeRef} className={` font-montserrat`}>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        coursesRef={coursesRef}
        testimonialRef={testimonialRef}
        communityRef={communityRef}
      />
      <div className={`${styles.hero}`}>
        <div
          className={`lg:flex items-center justify-end py-5 max-w-screen-xl mx-auto  text-center`}
        >
          <span
            className={`text-white text-center lg:text-right text-base mx-auto lg:mx-0 md:text-4xl font-bold italic font-montserrat ${styles.innova}`}
          >
            Igniting a Revolution in HR Innovation
          </span>
        </div>
        <div className={` md:pt-10 relative max-w-screen-2xl mx-auto`}>
          <div
            className={`max-w-screen-xl mx-auto lg:justify-between  lg:items-center lg:flex px-5 py-8 lg:py-20 text-white`}
          >
            <div
              className={`mb-10 lg:mb-20 self-stretch flex-1 flex items-center justify-center ${styles.hero_text}`}
            >
              <div>
              <h1
                className={`font-bold mb-2 text-3xl md:text-5xl lg:text-7xl leading-tight font-clashDisplay tracking-normal text-center lg:text-left ${styles.h1}`}
              >
                getlinked Tech Hackathon
                <span className="text-purple-1"> 1.0</span>{" "}
              </h1>
              <p className="font-book mb:1 md:mb-10 text-center lg:text-left text-sm md:text-xl lg:mr-52 px-6 lg:px-0 my-2">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div className="flex items-center gap-2 justify-center lg:justify-start my-5">
                <Button action={clickHandler} className="btn-contained">
                  Register
                </Button>
              </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                priority={true}
                src={HeroImage}
                alt="man-wearing-smart-glasses-touching-virtual-screen 1"
              />
              <div className={`absolute left-0 right-0 top-0 bottom-1 ${styles.virtual_screen}`}>
                <Image src={VirtualScreen} alt='Virtual Screen'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Hero;
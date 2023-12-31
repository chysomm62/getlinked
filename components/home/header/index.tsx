import HeroImage from "@/public/images/hero/hero.png";
import VirtualScreen from "@/public/images/hero/virtual_screen.png";
import Image from "next/image";

import styles from "./Hero.module.css";
import Button from "@/components/common/Button";

const Header = () => {
  const clickHandler = () => {};
  return (
    <>
      <header className={`font-montserrat line`}>
        <div className={`${styles.hero}`}>
          <div className={styles.purple_lens}></div>

          <div
            className={`md:flex items-center justify-end py-5 px-5 max-w-screen-xl mx-auto text-center`}
          >
            <span
              className={`text-white text-center md:text-right text-base mx-auto md:mx-0 md:text-4xl font-bold italic font-montserrat animate-pulse-slow ${styles.innova} `}
            >
              Igniting a Revolution in HR Innovation
            </span>
          </div>
          <div className={` md:pt-10 relative max-w-screen-2xl mx-auto`}>
            <div
              className={`max-w-screen-xl mx-auto md:justify-between  md:items-center md:flex pt-8 lg:pt-20 text-white`}
            >
              <div
                className={`mb-10 lg:mb-20 self-stretch px-5 flex-1 flex items-center justify-center ${styles.hero_text}`}
              >
                <div>
                  <h1
                    className={`font-bold mb-2 text-3xl md:text-5xl lg:text-7xl leading-tight font-clashDisplay tracking-normal text-center md:text-left ${styles.h1}`}
                  >
                    getlinked Te<span className={`${styles.c}`}>c</span>h
                    <span className="block whitespace-nowrap">
                      Hackathon
                      <span className={`text-purple-1 ${styles.version}`}>
                        {" "}
                        1.0
                      </span>
                    </span>{" "}
                  </h1>
                  <p className="font-book mb:1 md:mb-10 text-center md:text-left text-sm md:text-xl lg:mr-52 px-6 md:px-0 my-2">
                    Participate in getlinked tech Hackathon 2023 stand a chance
                    to win a Big prize
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start my-5">
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
                <div
                  className={`absolute left-0 right-0 top-0 bottom-1 rotating`}
                >
                  <Image
                    src={VirtualScreen}
                    alt="Virtual Screen"
                    className="w-full h-full animate-pulse"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

"use client";

import {
  Criteria,
  FAQs,
  Footer,
  Header,
  Introduction,
  Nav,
  Partners,
  Prizes,
  Rules,
  Timeline,
} from "@/components/home";
import { useRef } from "react";

export default function Home() {
  const timelineRef = useRef() as any;
  const overviewRef = useRef() as any;
  const faqRef = useRef() as any;
  const contactRef = useRef() as any;

  const navbarRef = useRef<HTMLDivElement>(null);

  // function handleScroll(e: any) {
  //   if (e.target.scrollTop > 5) {
  //     navbarRef.current!.style.boxShadow =
  //       "0px 0px 15px 0px rgba(144, 58, 255, 1)";
  //     navbarRef.current!.style.backgroundColor = "rgba(21, 14, 40, 1)";
  //   } else {
  //     navbarRef.current!.style.boxShadow = "none";
  //   }
  // }

  return (
    <main
    // onScroll={handleScroll}
    // className="fixed top-0 left-0 w-full h-full overflow-y-auto"
    >
      <Nav
        timelineRef={timelineRef}
        overviewRef={overviewRef}
        faqRef={faqRef}
        contactRef={contactRef}
        navbarRef={navbarRef}
      />
      <Header />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs faqRef={faqRef} />
      <Timeline timelineRef={timelineRef} />
      <Prizes />
      <Partners />
      <Footer
        timelineRef={timelineRef}
        overviewRef={overviewRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
    </main>
  );
}

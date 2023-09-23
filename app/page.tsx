"use client";

import {
  Criteria,
  FAQs,
  Header,
  Introduction,
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
  return (
    <>
      <Header
        timelineRef={timelineRef}
        overviewRef={overviewRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs faqRef={faqRef} />
      <Timeline timelineRef={timelineRef} />
      <Prizes />
      <Partners />
    </>
  );
}

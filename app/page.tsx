"use client";

import { Criteria, Hero, Introduction, Rules } from "@/components/home";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef() as any;
  const aboutRef = useRef() as any;
  const coursesRef = useRef() as any;
  const testimonialRef = useRef() as any;
  const communityRef = useRef() as any;
  return (
    <>
      <Hero
        homeRef={homeRef}
        aboutRef={aboutRef}
        coursesRef={coursesRef}
        testimonialRef={testimonialRef}
        communityRef={communityRef}
      />
      <Introduction />
      <Rules />
      <Criteria />
    </>
  );
}

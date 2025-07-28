"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import './Top.css'; // or wherever the CSS is

export default function Top() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
  }, []);

  return (
    <>
      <div className="top-video-container" data-aos="fade-up">
        <div className="top-video-wrapper">
          <video
            className="top-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Video/bannervideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

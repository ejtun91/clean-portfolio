"use client";
import anime from "animejs";
import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: "alternate",
    });
    anim
      .add({
        targets: "#svg path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 2000,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: "#svg #A",
        duration: 1000,
        opacity: 1,
        easing: "easeInOutQuart",
      });
  }, []);

  return (
    <div className="splash-screen w-[100wh] h-[100vh] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        id="svg"
      >
        <g
          fill="none"
          stroke="#6ed4e6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
            id="A"
          />
          <path d="M10 16v-6a2 2 0 1 1 4 0v6m-4-3h4" />
        </g>
      </svg>
    </div>
  );
};

export default SplashScreen;

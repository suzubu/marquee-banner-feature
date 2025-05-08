"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";

/**
 * Marquee component: scrolls horizontally across the full viewport.
 * - Supports tilt via rotation
 * - Speed controls how fast text scrolls (in px/sec)
 * - Direction can be left or right
 * - Optionally pauses animation when hovered
 */
export default function Marquee({
  children,
  speed = 100, // scroll speed in px/sec
  pauseOnHover = true, // pause animation on hover
  tilt = "0deg", // rotation angle (e.g., "5deg")
  direction = "left", // scroll direction: "left" or "right"
}) {
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);

  // Dynamically duplicate content enough times to overflow the screen twice
  const repeatedSpans = useMemo(() => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1920;
    const approxTextWidth = 300; // estimated width of one span
    const count = Math.ceil((screenWidth * 2) / approxTextWidth);
    return new Array(count)
      .fill(null)
      .map((_, i) => <span key={i}>{children}</span>);
  }, [children]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = wrapper.querySelector(".content");

    const contentWidth = content.scrollWidth / 2;
    const duration = contentWidth / speed; // duration based on speed

    // Set starting position depending on direction
    gsap.set(wrapper, { x: direction === "left" ? 0 : -contentWidth });

    // Animate the wrapper left or right
    animationRef.current = gsap.to(wrapper, {
      x: direction === "left" ? -contentWidth : 0,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    // Optional hover pause behavior
    if (pauseOnHover) {
      wrapper.addEventListener("mouseenter", () => {
        animationRef.current.timeScale(0.1);
      });
      wrapper.addEventListener("mouseleave", () => {
        animationRef.current.timeScale(1);
      });
    }

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [children, speed, pauseOnHover, direction]);

  // Apply tilt rotation only if angle is not 0
  const tilted = tilt !== "0deg";
  const tiltStyle = tilted
    ? {
        transform: `rotate(${tilt})`,
        transformOrigin: "center",
        position: "relative",
        width: "100vw",
        left: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 10,
      }
    : {};

  // Main element structure
  const marqueeElement = (
    <div className="wrapper">
      <div className="marquee" ref={wrapperRef}>
        <div className="content">{repeatedSpans}</div>
      </div>
    </div>
  );

  return tilted ? (
    <div style={tiltStyle}>{marqueeElement}</div>
  ) : (
    marqueeElement
  );
}

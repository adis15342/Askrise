import React, { useEffect, useRef, useState } from "react";
import "../styles/CombinedScrollSections.css";

const storyHeadings = [
  "empower you to drive growth",
  "unlock new market opportunities",
  "transform strategy into action",
  "create impact with confidence",
];

const storyCaptions = [
  "We help businesses identify the right path forward with clarity.",
  "Strategic insights reveal where your next opportunities truly are.",
  "Turning planning into measurable execution is where growth happens.",
  "With the right guidance, you can move faster and lead with certainty.",
];

const COUNTER_START = 1;
const COUNTER_END = 6;
const COUNTER_SCROLL_SPEED = 0.6;

const CombinedScrollSections = () => {
  const infoSectionRef = useRef(null);
  const storySectionRef = useRef(null);
  const threeLineSectionRef = useRef(null);

  const [count, setCount] = useState(1);
  const [revealed, setRevealed] = useState(false);
  const [threeLineRevealed, setThreeLineRevealed] = useState(false);

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  useEffect(() => {
    const updateInfoSection = () => {
      if (!infoSectionRef.current) return;

      const rect = infoSectionRef.current.getBoundingClientRect();
      const revealTrigger = window.innerHeight * 0.85;
      const counterStartTrigger = window.innerHeight * 0.6;
      const counterEndTrigger = window.innerHeight * 0.2;

      if (rect.top < revealTrigger) {
        setRevealed(true);
      }

      const counterRange = counterStartTrigger - counterEndTrigger;
      const rawProgress = (counterStartTrigger - rect.top) / counterRange;
      const progress = Math.min(
        Math.max(rawProgress * COUNTER_SCROLL_SPEED, 0),
        1
      );
      const nextCount = Math.round(
        COUNTER_START + (COUNTER_END - COUNTER_START) * progress
      );

      setCount(nextCount);
    };

    const updateThreeLineSection = () => {
      if (!threeLineSectionRef.current) return;
      const rect = threeLineSectionRef.current.getBoundingClientRect();
      const trigger = window.innerHeight * 0.85;

      if (rect.top < trigger) {
        setThreeLineRevealed(true);
      }
    };

    const updateStorySection = () => {
      if (!storySectionRef.current) return;

      const section = storySectionRef.current;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(
          (window.scrollY - section.offsetTop) / (sectionHeight - viewportHeight),
          0
        ),
        1
      );

      const totalSlides = storyHeadings.length;
      let activeIndex = Math.floor(progress * totalSlides);

      if (activeIndex >= totalSlides) activeIndex = totalSlides - 1;

      setActiveStoryIndex(activeIndex);
    };

    const handleScrollAnimations = () => {
      updateInfoSection();
      updateStorySection();
      updateThreeLineSection();
    };

    handleScrollAnimations();

    window.addEventListener("scroll", handleScrollAnimations);
    window.addEventListener("resize", handleScrollAnimations);
    window.addEventListener("load", handleScrollAnimations);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
      window.removeEventListener("resize", handleScrollAnimations);
      window.removeEventListener("load", handleScrollAnimations);
    };
  }, []);

  const getStoryClass = (index) => {
    if (index === activeStoryIndex) return "active";
    if (index < activeStoryIndex) return "prev";
    return "";
  };

  return (
    <>
      {/* SECTION 1 */}
      <section
        className="three-line-scroll"
        id="threeLineScroll"
        ref={threeLineSectionRef}
      >
        <div className="three-line-sticky">
          {/* <div className="bg-layer" /> */}
          <video
            className="bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"cd
            poster="/images/CA.png"

          >
            <source src="/images/CA.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay" />

          <div className="three-line-content">
            <h3 className={`line small-line ${threeLineRevealed ? "show" : ""}`}>
              We combine strategy and solutions
            </h3>
            <h1 className={`line big-line ${threeLineRevealed ? "show" : ""}`}>so you can</h1>
            <h2 className={`line medium-line ${threeLineRevealed ? "show" : ""}`}>
              adapt, advance, and achieve more
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="scroll-scene" id="scene">
        <div className="sticky-image-wrap">
          <img
            src=".\images\frontpage2.jpg"
            alt="City Building"
          />
        </div>

        <div className="info-section" id="infoSection" ref={infoSectionRef}>
          <div className="info-inner">
            <div className={`left-content reveal ${revealed ? "show" : ""}`}>
              <h2 style={{letterSpacing: "-2px",fontWeight: 700,}}>
                As industries evolve and market dynamics shift, our consultants
                help you turn uncertainty into opportunity.
              </h2>
            </div>

            <div className={`right-content reveal ${revealed ? "show" : ""}`}>
              <div className="stat-box">
                <div className="counter">
                  <span className="num">{count}</span>
                  <span className="suffix">th</span>
                </div>
                <p style={{letterSpacing: "-2px",fontWeight: 700, fontFamily: "Georgia, serif" }}>
                  Delivered a key 2025 project, showcasing expertise and
                  dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        className="story-section"
        id="storySection"
        ref={storySectionRef}
      >
        <div className="story-sticky">
          <div className="story-heading-wrap">
            {storyHeadings.map((heading, index) => (
              <h2
                key={index}style={{ letterSpacing: "-2px", fontWeight: 700, }}
                className={`story-heading ${getStoryClass(index)}`}
              >
                {heading}
              </h2>
            ))}
          </div>

          {/* <div className="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Office presentation"
            />
            <div className="story-image-overlay" />
          </div> */}

          <div className="story-image-wrap">
            <video
              className="story-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              // poster="/images/office-poster.jpg"
            >
              <source src="/images/frontvedio1 (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="story-image-overlay" />
          </div>

          <div className="story-caption-wrap">
            {storyCaptions.map((caption, index) => (
              <p style={{letterSpacing: "1px",fontWeight: 700,}} 
                key={index}
                className={`story-caption ${getStoryClass(index)}`}
              >
                {caption}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedScrollSections;

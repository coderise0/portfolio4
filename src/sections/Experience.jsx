import React, { useEffect, useRef, useState } from "react";
import timelineItems from "../data/experience.json";

// Custom timeline with separated left and right sections
// Even indexed items (0,2,4...) on left, Odd indexed items (1,3,5...) on right

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = entry.target.dataset.index;
            setVisibleItems((prev) => new Set(prev).add(itemIndex));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" id="experience">
      <div className="container">
        {/* Intro Section */}
        <div className="intro animate-intro">
          <p className="eyebrow">Work Experience</p>
          <h2>My work journey</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiunt eos cu eum an brute copiosae hendrerit. Eos erant
            dolorum an. Per facer affert ut. Mei
          </p>
        </div>

        {/* Timeline Container - Split into 2 sections */}
        <div className="timeline-container" ref={timelineRef}>
          {/* Center line */}
          <div className="center-line"></div>

          {/* Mobile: Combined timeline */}
          <div className="mobile-timeline">
            {timelineItems.map((item, index) => {
              const isVisible = visibleItems.has(index.toString());
              return (
                <div
                  key={item.year + "mobile"}
                  className={`timeline-item mobile-item ${
                    isVisible ? "animate-in" : ""
                  }`}
                  data-index={index}
                >
                  <div className="content-card">
                    <h3>{item.title}</h3>
                    <div className="company">
                      {item.company || "Company Name"}
                    </div>
                    <div className="card-body">
                      <div className="duration">
                        {item.duration || "Jan 2023 - Present"}
                      </div>
                      <p>{item.text}</p>
                      <div className="skills">
                        {(item.skills || ["React", "Node.js", "MongoDB"]).map(
                          (skill, i) => (
                            <span key={i} className="skill-tag">
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="timeline-circle">
                    <span className="year">{item.year}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Left section - Even indexed items (0,2,4,6...) */}
          <div className="timeline-section left-section">
            {timelineItems
              .filter((item, index) => index % 2 === 0)
              .map((item, filteredIndex) => {
                const originalIndex = timelineItems.findIndex(
                  (original) => original.year === item.year
                );
                const isVisible = visibleItems.has(originalIndex.toString());
                return (
                  <div
                    key={item.year + "left"}
                    className={`timeline-item left-item ${
                      isVisible ? "animate-in" : ""
                    }`}
                    data-index={originalIndex}
                  >
                    <div className="content-card">
                      <h3>{item.company || "Company Name"}</h3>
                      <div className="company">
                        {item.title || "Section Manager"}
                      </div>
                      <div className="card-body">
                        <div className="duration">
                          {item.duration || "Jan 2023 - Present"}
                        </div>
                        <p>{item.text}</p>
                        <div className="skills">
                          {(item.skills || ["React", "Node.js", "MongoDB"]).map(
                            (skill, i) => (
                              <span key={i} className="skill-tag">
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="timeline-circle">
                      <span className="year">{item.year}</span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Desktop: Right section - Odd indexed items (1,3,5,7...) */}
          <div className="timeline-section right-section">
            {timelineItems
              .filter((item, index) => index % 2 === 1)
              .map((item, filteredIndex) => {
                const originalIndex = timelineItems.findIndex(
                  (original) => original.year === item.year
                );
                const isVisible = visibleItems.has(originalIndex.toString());
                return (
                  <div
                    key={item.year + "right"}
                    className={`timeline-item right-item ${
                      isVisible ? "animate-in" : ""
                    }`}
                    data-index={originalIndex}
                  >
                    <div className="timeline-circle">
                      <span className="year">{item.year}</span>
                    </div>
                    <div className="content-card">
                      <h3>{item.company || "Company Name"}</h3>
                      <div className="company">
                        {item.title || "General Manager"}
                      </div>
                      <div className="card-body">
                        <div className="duration">
                          {item.duration || "Jan 2023 - Present"}
                        </div>
                        <p>{item.text}</p>
                        <div className="skills">
                          {(item.skills || ["JavaScript", "CSS", "HTML"]).map(
                            (skill, i) => (
                              <span key={i} className="skill-tag">
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <style jsx>{`
        main.container {
          widtth: 88%;
        }
        /* Experience Section Styles */
        .experience-section {
          padding: 80px 0;
        }

        .container {
          max-width: 1200px; /* Reduced from 1300px */
          width: 90%; /* Increased to 90% for more space */
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Mobile first approach */
        @media (max-width: 1024px) {
          .container {
            width: 95%;
            padding: 0 15px;
          }

          .content-card {
            max-width: 500px;
          }
        }

        /* Intro Styles */
        .intro {
          max-width: 600px;
          margin: 0 auto 50px auto;
          text-align: center;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-intro {
          animation-delay: 0.2s;
        }

        .eyebrow {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .experience-section .intro h2 {
          color: var(--red-dark);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .experience-section .subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: var(--red-medium);
          margin: 0;
        }

        /* Timeline Container Layout */
        .timeline-container {
          display: flex;
          position: relative;
          column-gap: 0;
          align-items: start;
          justify-content: center;
        }

        /* Center Line */
        .experience-section .center-line {
          position: absolute;
          left: 50%;
          display: none;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background-color: var(--red-dark);
          z-index: 0; /* Reduced from 1 to 0 to be behind circles */
          top: 0;
        }

        /* Mobile timeline - hidden on desktop */
        .mobile-timeline {
          display: none;
        }

        /* Timeline Sections */
        .timeline-section {
          flex: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .experience-section .left-section {
          border-inline-end: 3px solid var(--red-dark);
          align-items: flex-start;
          right: 0px;
          padding-left: 0px;
        }

        .right-section {
          align-items: flex-start;
          padding-left: 0;
          margin-top: 60px; /* Offset to avoid circle intersection */
        }

        /* Timeline Items */
        .timeline-item {
          display: flex;
          align-items: flex-start; /* Changed from center to flex-start */
          gap: 0;
          margin-bottom: 20px;
          position: relative;
          opacity: 0;
          transform: translateY(80px);
          transition: all 0.6s ease-out;
        }

        /* Animation states */
        .timeline-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Different animation delays for left and right items */
        .left-item {
          flex-direction: row;
          text-align: right;
          justify-content: flex-end;
          transform: translateX(-50px) translateY(50px);
        }

        .left-item.animate-in {
          transform: translateX(-22px) translateY(0);
        }

        .right-item {
          flex-direction: row-reverse;
          text-align: left;
          justify-content: flex-start; /* غيرت من flex-end إلى flex-start للتماثل */
          transform: translateX(25px) translateY(50px);
        }

        .right-item.animate-in {
          transform: translateX(-2px) translateY(0);
        }

        /* Timeline Circles */
        .timeline-circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--red-dark);
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); /* Enhanced shadow for better elevation */
          z-index: 10; /* High enough to be above center line (z-index: 0) */
          flex-shrink: 0;
          position: absolute;
        }

        /* Arrow pointing to content from circles */
        .timeline-circle::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          z-index: 6; /* Higher than circle to appear on top */
        }

        .left-item .timeline-circle {
          right: -47px; /* Position on center line from left section */
          top: 0.6rem; /* Position at first quarter of the timeline item */
        }

        /* Arrow pointing left from left section circles */
        .left-item .timeline-circle::after {
          border-width: 8px 12px 8px 0;
          border-color: transparent var(--red-dark) transparent transparent;
          left: -15px; /* 3px border + 12px arrow = 15px total offset */
          top: 50%;
          transform: translateY(-50%);
        }

        .right-item .timeline-circle {
          left: -20px; /* Position on center line from right section */
          top: 0.6rem; /* Position at first quarter of the timeline item */
        }

        /* Arrow pointing right from right section circles */
        .right-item .timeline-circle::after {
          border-width: 8px 0 8px 12px;
          border-color: transparent transparent transparent var(--red-dark);
          right: -15px; /* 3px border + 12px arrow = 15px total offset */
          top: 50%;
          transform: translateY(-50%);
        }

        .year {
          color: white;
          font-size: 11px;
          font-weight: bold;
          line-height: 1;
          position: relative;
          z-index: 11; /* Higher than circle to ensure text is visible */
        }

        /* Content Cards */
        .content-card {
          background: #ffffff;
          padding: 0;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          max-width: 450px;
          width: calc(100% - 25px);
          flex-shrink: 0;
          margin-right: 30px; /* Space for circle positioning */
          position: relative;
          transition: all 0.3s ease;
        }

        .content-card::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
        }

        /* Arrow pointing toward left cards from their circles */
        .left-item .content-card::before {
          border-width: 10px 0 10px 15px;
          border-color: transparent transparent transparent var(--red-dark);
          right: -15px;

          top: 20px; /* Adjusted to align with circle position */
        }

        .right-item .content-card {
          margin-right: -30px;
          margin-left: 25px; /* Space for circle positioning on right side */
        }

        /* Arrow pointing toward right cards from their circles */
        .right-item .content-card::before {
          content: "";
          border-width: 10px 15px 10px 0;
          border-color: transparent var(--red-dark) transparent transparent;
          left: -15px;
          top: 20px; /* Adjusted to align with circle position */
        }

        /* Hover effect */
        .timeline-item:hover .content-card {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .content-card h3 {
          background: var(--red-dark);
          color: var(--color-white);
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          white-space: nowrap;
          line-height: 1.2;
          padding: 8px 20px 4px;
          width: 100%;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .content-card .company {
          background: var(--red-dark);
          color: var(--color-white);
          font-size: 12px;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0.5px;
          padding: 4px 20px 8px;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .content-card .card-body {
          padding: 20px;
        }

        .content-card .duration {
          color: #776b50ff;
          font-size: 13px;
          font-weight: 400;
          margin: 0 0 16px 0;
          font-style: italic;
        }

        .content-card p {
          color: var(--color-primary-text);
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .content-card .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .content-card .skill-tag {
          background: var(--beige-lightest);
          color: var(--red-medium);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          border: 1px solid var(--pink-light);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .timeline-container {
            display: block;
            padding: 0 20px;
          }

          /* Hide desktop sections on mobile */
          .timeline-section {
            display: none;
          }

          /* Show mobile timeline */
          .mobile-timeline {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding-left: 60px;
          }

          .center-line {
            left: 50px;
            transform: translateX(-50%);
            width: 2px;
            display: block;
            height: 100%;
          }

          .mobile-item {
            gap: 0;
            position: relative;
            margin-bottom: 0;
            opacity: 1;
            transform: none;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            text-align: left;
            justify-content: flex-start;
          }

          .timeline-circle {
            width: 35px;
            height: 35px;
            position: absolute;
            left: -47px;
            top: 10px;
            right: auto;
          }

          .year {
            font-size: 9px;
          }

          .content-card {
            max-width: 100%;
            margin-right: 0;
            margin-left: 0;
          }

          .content-card h3 {
            font-size: 15px;
            padding: 12px 16px;
          }

          .content-card .company {
            font-size: 12px;
            padding: 8px 16px;
          }

          .content-card .card-body {
            padding: 16px;
          }

          .content-card p {
            font-size: 13px;
          }

          /* Hide arrows on mobile */
          .timeline-circle::after,
          .content-card::before {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .intro h2 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 16px;
          }

          .timeline-container {
            padding: 0 15px;
          }

          .center-line {
            left: 25px;
          }

          .left-section,
          .right-section {
            padding-left: 50px;
          }

          .timeline-circle {
            width: 30px;
            height: 30px;
            left: -40px;
            top: 8px;
          }

          .year {
            font-size: 8px;
          }

          .content-card h3 {
            font-size: 14px;
            padding: 10px 12px;
          }

          .content-card .company {
            font-size: 11px;
            padding: 6px 12px;
          }

          .content-card .card-body {
            padding: 12px;
          }

          .content-card p {
            font-size: 12px;
            line-height: 1.4;
          }

          .skill-tag {
            font-size: 10px;
            padding: 3px 6px;
          }
        }
      `}</style>
    </section>
  );
}

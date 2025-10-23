import React from 'react'
import timelineItems from '../data/experience.json'
import '../styles/experience.css'

// Experience timeline section inspired by the provided mockup
// Uses CSS variables from src/styles/colors.css

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="timeline">
        <div className="timeline-line" />

        <div className="intro">
          <p className="eyebrow">Work Experience</p>
          <h2>My work journey</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiunt eos cu eum an brute copiosae hendrerit.
            Eos erant dolorum an. Per facer affert ut. Mei
          </p>
        </div>

        {timelineItems.map((item, index) => (
          <div key={item.year + index} className={`timeline-row ${item.side}`}>
            <div className="headline-bar">
              {item.year} {item.title}
            </div>
            <div className="content-box">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


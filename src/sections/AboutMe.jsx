import './AboutMe.css';

function AboutMe() {
  return (
    <section className="section">
      <h2>About Me</h2>

      <div className="container">
        <div className="top-section">
          <div>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-smiley-man-work_23-2149622834.jpg"
              alt="Profile Picture"
              className="image"
            />
            <p className="bottom-paragraph">
              Outside of development, I enjoy photography, digital art, and exploring new trends in
              web design to keep my skills up-to-date and inspired.
            </p>
          </div>

          <div className="content">
            <h3>Khaled Ahmad</h3>
            <p className="text">
              I am a passionate full-stack developer with a strong interest in creating visually
              appealing and user-friendly web applications. I recently graduated in [Your Major,
              e.g., Computer Science or Web Development], and I enjoy turning design concepts into
              functional, responsive interfaces using technologies like React, HTML, CSS, and
              JavaScript. In addition to coding, I have a keen eye for design and love experimenting
              with UI/UX principles to make websites intuitive and engaging. I am always eager to
              learn new tools and frameworks, and I enjoy collaborating on projects that challenge
              me to grow both technically and creatively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

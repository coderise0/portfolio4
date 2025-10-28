import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="top-section">
      
        <div className="left-section">
          <img
            src="/public/images.svg/photo2.jpg"
            alt="Profile Picture"
            className="image"
          />
          <p className="bottom-paragraph">
            Outside of development, I enjoy photography, digital art, and
            exploring new trends in web design to keep my skills up-to-date
            and inspired.
          </p>
        </div>

       
        <div className="right-section">
          <h3>Khaled Ahmad</h3>
          <p className="text">
            I am a passionate full-stack developer with a strong interest in
            creating visually appealing and user-friendly web applications. I
            recently graduated in Computer Science and I enjoy turning design
            concepts into functional, responsive interfaces using technologies
            like React, HTML, CSS, and JavaScript. In addition to coding, I love
            experimenting with UI/UX principles to make websites intuitive and
            engaging. I am always eager to learn new tools and frameworks, and I
            enjoy collaborating on projects that challenge me to grow both
            technically and creatively.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

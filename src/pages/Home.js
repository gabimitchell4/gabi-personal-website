import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';
import Footer from '../components/Footer';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const secondSectionRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const firstSectionHeight = 290; 

  return (
    <div className="outerContainer">
      <section className="first-section" style={{ transform: `translateY(-${scrollPosition}px)` }}>
        <div className="headingsAndImage">
          <div className="headings">
            <h1 className="mainHeading" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
              Hi, my name is
            </h1>
            <h1 className="nameHeading" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
              Gabi Mitchell
            </h1>
          </div>
            <img
              className="headshot1"
              src="https://media.licdn.com/dms/image/D4D03AQHRLGG8H89--A/profile-displayphoto-shrink_800_800/0/1696639841286?e=2147483647&v=beta&t=IqZ2QjsTxMnZrMzsTR0a1ralGq5sGSHnpNcOSzw7Xqo"
              alt="Headshot"
              style={{
                opacity: 1 - scrollPosition / window.innerHeight,
              }}
            />

        </div>
      </section>

      {/* <section
        ref={secondSectionRef}
        className="section second-section"
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          marginTop: `${firstSectionHeight}px`,
          marginBottom: '0px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h3 className="about">
          I’m a third-year Computer Science and Design major exploring various applications of tech. I enjoy turning designs into code, have a keen interest in UI/UX Design, and am currently looking into how medicine and computer science intersect to create impactful solutions.
          I am passionate about teaching others how to code, specifically women and other underrespresnted groups in tech.
        </h3> */}
        {/* <div className="navyCircle"> */}
          {/* <img
            className="headshot2"
            src="https://media.licdn.com/dms/image/D4D03AQHRLGG8H89--A/profile-displayphoto-shrink_800_800/0/1696639841286?e=2147483647&v=beta&t=IqZ2QjsTxMnZrMzsTR0a1ralGq5sGSHnpNcOSzw7Xqo"
            alt="Headshot"
            style={{
              opacity: 1 - scrollPosition / window.innerHeight,
            }}
          /> */}
        {/* </div> */}
      {/* </section> */}
    </div>
  );
}

export default Home;

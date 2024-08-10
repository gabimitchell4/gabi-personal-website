import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
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

  const firstSectionHeight = 290; // Adjust this value based on the actual height of your first section

  return (
    <div className="container">
      <section className="section first-section" style={{ transform: `translateY(-${scrollPosition}px)`, marginBottom: '20px' }}>
        {/* Your content for the first section */}
        <h1 className="mainHeading" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
          Hi, my name is
        </h1>
        <h1 className="nameHeading" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
          Gabi Mitchell
        </h1>
        <h2 className="meetYou" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
          It's nice to meet you!
        </h2>
        <div className="navyCircle">
          <img
            className="headshot"
            src="https://media.licdn.com/dms/image/D4D03AQHRLGG8H89--A/profile-displayphoto-shrink_800_800/0/1696639841286?e=2147483647&v=beta&t=IqZ2QjsTxMnZrMzsTR0a1ralGq5sGSHnpNcOSzw7Xqo"
            alt="Headshot"
            style={{
              opacity: 1 - scrollPosition / window.innerHeight,
              position: 'absolute',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              borderColor: 'rgb(32, 25, 80)',
              borderStyle: 'solid',
              borderWidth: '3%',
              width: '25%',
              maxWidth: '30vw',
              marginLeft: '15vw',
              
            }}
          />
        </div>
      </section>

      {/* Apply styles directly to the second section */}
      <section
        ref={secondSectionRef}
        className="section second-section"
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          marginTop: `${firstSectionHeight}px`,
          marginBottom: '0px',
          display: 'flex',
          justifyContent: 'space-between', // You can adjust this based on your needs
          alignItems: 'center',
        }}
      >
        {/* Your content for the second section */}
        <h2 className="about">
          I am a second year Computer Science and Design major, who is interested in many applications of Computer Science!
          I enjoy bringing my designs into life through code and am interested in UI/UX Design. I am also currently seeking to explore the
          intersection between medicine and computer science so that I can apply my technical skills in a way that I can create
          value for the most people.
        </h2>
        <div className="navyCircle">
          <img
            className="headshot"
            src="https://media.licdn.com/dms/image/D4D03AQHRLGG8H89--A/profile-displayphoto-shrink_800_800/0/1696639841286?e=2147483647&v=beta&t=IqZ2QjsTxMnZrMzsTR0a1ralGq5sGSHnpNcOSzw7Xqo"
            alt="Headshot"
            style={{
              opacity: scrollPosition >= window.innerHeight / 4 ? 1 : scrollPosition / window.innerHeight,
              position: 'absolute',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              borderColor: 'rgb(32, 25, 80)',
              borderStyle: 'solid',
              borderWidth: '3%',
              width: '25%',
              maxWidth: '30vw',
              marginLeft: '15vw',
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

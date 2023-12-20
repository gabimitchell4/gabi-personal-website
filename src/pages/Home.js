import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className = "container">
      <h1 className = "mainHeading">Hi, my name is </h1>
      <h1 className = "nameHeading">Gabi Mitchell</h1>
      <h2>It's nice to meet you!</h2>
        <div className="navyCircle">
          <img className="headshot" src="https://media.licdn.com/dms/image/D4D03AQHRLGG8H89--A/profile-displayphoto-shrink_800_800/0/1696639841286?e=2147483647&v=beta&t=IqZ2QjsTxMnZrMzsTR0a1ralGq5sGSHnpNcOSzw7Xqo" alt="Headshot" />
        </div>
    </div>
  );
}

export default Home;

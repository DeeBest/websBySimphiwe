import './hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        if (text.length < technologies[index].length) {
          setText(technologies[index].substring(0, text.length + 1));
        } else {
          setIsTyping(false);
        }
      } else {
        if (index < technologies.length - 1) {
          setIndex(index + 1);
          setText('');
          setIsTyping(true);
        } else {
          setIndex(0);
          setText('');
          setIsTyping(true);
        }
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [index, technologies, text, isTyping]);

  return (
    <section id="hero">
      <div id="hero-content-container">
        <div id="hero-heading">
          <h1>A Full-Stack Developer.</h1>
          <hr />
        </div>
        <div id="hero-body">
          <div id="hero-body-content">
            <h2 id="hero-body-header">
              I specialize in <span id="auto-text">{text}</span>
            </h2>
            <p>
              As a seasoned full stack MERN developer, i specialize in designing
              and developing scalable, efficient and visually stunning web
              applications. With a passion for innovation and a keen eye for
              detail, I develop and maintain cutting edge applications.
            </p>
          </div>
          <button>View Projects</button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

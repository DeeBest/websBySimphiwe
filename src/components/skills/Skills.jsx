import { useState } from 'react';
import SkillsCategoryCard from '../skillsCategory/SkillsCategoryCard';
import './skills.css';

const Skills = () => {
  const [skillsCategories, setSkillsCategories] = useState([
    {
      category: 'Development Tools',
      skills: [
        {
          skillName: 'Git',
          skillDesc:
            'A version control system for tracking changes in source code.',
          skillImgUrl: 'src/assets/icons/git-scm-icon.svg',
        },
        {
          skillName: 'Github',
          skillDesc:
            'A web-based platform for hosting and collaborating on Git repositories.',
          skillImgUrl: 'src/assets/icons/icons8-github.svg',
        },
        {
          skillName: 'NPM',
          skillDesc:
            'A package manager for Javascript, used for installing and managing dependencies.',
          skillImgUrl: 'src/assets/icons/icons8-npm.svg',
        },
        {
          skillName: 'Webpack',
          skillDesc:
            'A module bundler for JavaScript, used for optimizing and bundling code.',
          skillImgUrl: 'src/assets/icons/js_webpack-ar21.svg',
        },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        {
          skillName: 'HTML',
          skillDesc:
            'HyperText Markup Language, used for structuring and organizing content on the web.',
          skillImgUrl: 'src/assets/icons/w3_html5-ar21.svg',
        },
        {
          skillName: 'CSS',
          skillDesc:
            'Cascading Style Sheets, used for styling and layout of the web pages.',
          skillImgUrl: 'src/assets/icons/w3_css-ar21.svg',
        },
        {
          skillName: 'JavaScript',
          skillDesc:
            'A Programming language used for adding interactivity and dynamic effects to web pages.',
          skillImgUrl: 'src/assets/icons/icons8-javascript.svg',
        },
        {
          skillName: 'React',
          skillDesc: 'A JavaScript library for building reusable UI components',
          skillImgUrl: 'src/assets/icons/react-js-icon.png',
        },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        {
          skillName: 'NodeJS',
          skillDesc:
            'A JavaScript runtime environment for executing server-side code.',
          skillImgUrl: 'src/assets/icons/nodejs_icon.png',
        },
        {
          skillName: 'ExpressJS',
          skillDesc:
            'A NodeJS framework for building web applications and APIs.',
          skillImgUrl: 'src/assets/icons/express-js.png',
        },
      ],
    },
    {
      category: 'Databases',
      skills: [
        {
          skillName: 'MongoDB',
          skillDesc:
            'A NoSQL database for storing and querying large amounts of data.',
          skillImgUrl: 'src/assets/icons/mongodb_icon.png',
        },
      ],
    },
    {
      category: 'Testing',
      skills: [
        {
          skillName: 'Jest',
          skillDesc:
            'A testing framework for JavaScript, used for writing and running unit tests.',
          skillImgUrl: 'src/assets/icons/jest-js-icon.png',
        },
      ],
    },
    {
      category: 'Operating Systems',
      skills: [
        {
          skillName: 'Linux',
          skillDesc:
            'An open-source operating system for computers and servers.',
          skillImgUrl: 'src/assets/icons/linux-icon.svg',
        },
      ],
    },
  ]);

  return (
    <div id="skills-listing-container">
      <section id="skills-listing-header">
        <h2>My Skills</h2>
        <hr />
        <p>
          Below are some of the tools and skill sets that I currently possess in
          my arsenal and I am still working on acquiring more, the journey is
          just beginning.
        </p>
      </section>
      <section id="skills-listing-body">
        {skillsCategories.map((skillCategory, index) => (
          <SkillsCategoryCard skillCategory={skillCategory} key={index} />
        ))}
      </section>
    </div>
  );
};
export default Skills;

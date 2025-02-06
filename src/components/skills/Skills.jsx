import { useState } from 'react';
import SkillsCategoryCard from '../skillsCategory/SkillsCategoryCard';
import './skills.css';

import { Link } from 'react-router-dom';

const Skills = ({ isHome }) => {
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

  const featuredSkills = new Set([
    'React',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'Git',
  ]);

  const filteredSkillsCategories = isHome
    ? skillsCategories
        .map((category) => ({
          ...category,
          skills: category.skills.filter((skill) =>
            featuredSkills.has(skill.skillName)
          ),
        }))
        .filter((category) => category.skills.length > 0)
    : skillsCategories;

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '20px',
          width: '100%',
        }}
      >
        {!isHome && (
          <select name="skill-categories-select" id="skill-categories-select">
            <option value="All">All</option>
            <option value="Development Tools">Development Tools</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Database">Database</option>
            <option value="Testing">Testing</option>
            <option value="Operating System">Operating System</option>
          </select>
        )}
        <section id="skills-listing-body">
          {filteredSkillsCategories.map((skillCategory, index) => (
            <SkillsCategoryCard skillCategory={skillCategory} key={index} />
          ))}
        </section>
      </div>
      {isHome && (
        <button id="view-all-skills-btn">
          <Link to="/skills">View All Skills</Link>
        </button>
      )}
    </div>
  );
};

export default Skills;

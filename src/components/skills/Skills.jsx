import { useEffect, useState } from 'react';
import SkillsCategoryCard from '../skillsCategory/SkillsCategoryCard';
import './skills.css';

import { Link } from 'react-router-dom';

const Skills = ({ isHome }) => {
  const [skills, setSkills] = useState([
    {
      skillName: 'Git',
      skillDesc:
        'A version control system for tracking changes in source code.',
      skillImgUrl: 'src/assets/icons/git-scm-icon.svg',
      category: 'Development Tools',
    },
    {
      skillName: 'Github',
      skillDesc:
        'A web-based platform for hosting and collaborating on Git repositories.',
      skillImgUrl: 'src/assets/icons/icons8-github.svg',
      category: 'Development Tools',
    },
    {
      skillName: 'NPM',
      skillDesc:
        'A package manager for Javascript, used for installing and managing dependencies.',
      skillImgUrl: 'src/assets/icons/icons8-npm.svg',
      category: 'Development Tools',
    },
    {
      skillName: 'Webpack',
      skillDesc:
        'A module bundler for JavaScript, used for optimizing and bundling code.',
      skillImgUrl: 'src/assets/icons/js_webpack-ar21.svg',
      category: 'Development Tools',
    },
    {
      skillName: 'HTML',
      skillDesc:
        'HyperText Markup Language, used for structuring and organizing content on the web.',
      skillImgUrl: 'src/assets/icons/w3_html5-ar21.svg',
      category: 'Frontend Development',
    },
    {
      skillName: 'CSS',
      skillDesc:
        'Cascading Style Sheets, used for styling and layout of the web pages.',
      skillImgUrl: 'src/assets/icons/w3_css-ar21.svg',
      category: 'Frontend Development',
    },
    {
      skillName: 'JavaScript',
      skillDesc:
        'A Programming language used for adding interactivity and dynamic effects to web pages.',
      skillImgUrl: 'src/assets/icons/icons8-javascript.svg',
      category: 'Frontend Development',
    },
    {
      skillName: 'React',
      skillDesc: 'A JavaScript library for building reusable UI components',
      skillImgUrl: 'src/assets/icons/react-js-icon.png',
      category: 'Frontend Development',
    },
    {
      skillName: 'NodeJS',
      skillDesc:
        'A JavaScript runtime environment for executing server-side code.',
      skillImgUrl: 'src/assets/icons/nodejs_icon.png',
      category: 'Backend Development',
    },
    {
      skillName: 'ExpressJS',
      skillDesc: 'A NodeJS framework for building web applications and APIs.',
      skillImgUrl: 'src/assets/icons/express-js.png',
      category: 'Backend Development',
    },
    {
      skillName: 'MongoDB',
      skillDesc:
        'A NoSQL database for storing and querying large amounts of data.',
      skillImgUrl: 'src/assets/icons/mongodb_icon.png',
      category: 'Databases',
    },
    {
      skillName: 'Jest',
      skillDesc:
        'A testing framework for JavaScript, used for writing and running unit tests.',
      skillImgUrl: 'src/assets/icons/jest-js-icon.png',
      category: 'Testing',
    },
    {
      skillName: 'Linux',
      skillDesc: 'An open-source operating system for computers and servers.',
      skillImgUrl: 'src/assets/icons/linux-icon.svg',
      category: 'Operating Systems',
    },
  ]);
  const [displayedSkills, setDisplayedSkills] = useState([...skills]);
  const [categoryTitle, setCategoryTitle] = useState('All Skills');

  const featuredSkills = skills.filter((skill) => {
    if (
      skill.skillName === 'Git' ||
      skill.skillName === 'React' ||
      skill.skillName === 'NodeJS' ||
      skill.skillName === 'ExpressJS' ||
      skill.skillName === 'MongoDB'
    ) {
      return skill;
    }
  });

  const handleFilterSkills = (category) => {
    const newList = skills.filter((skill) => {
      if (skill.category === category) {
        return skill;
      }
      if (category === 'All Skills') {
        return skills;
      }
    });
    setDisplayedSkills(newList);
    setCategoryTitle(category);
  };

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
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '20px',
          width: '100%',
          position: 'relative',
        }}
      >
        {!isHome && (
          <select
            name="skill-categories-select"
            id="skill-categories-select"
            onChange={(e) => handleFilterSkills(e.target.value)}
          >
            <option value="All Skills">All</option>
            <option value="Development Tools">Development Tools</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Databases">Databases</option>
            <option value="Testing">Testing</option>
            <option value="Operating Systems">Operating Systems</option>
          </select>
        )}
        <section id="skills-listing-body">
          <SkillsCategoryCard
            categoryTitle={isHome ? 'Featured Skills' : categoryTitle}
            skillsArr={isHome ? featuredSkills : displayedSkills}
          />
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

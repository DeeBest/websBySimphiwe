import { useContext, useEffect, useState } from 'react';
import SkillsCategoryCard from '../skillsCategory/SkillsCategoryCard';
import './skills.css';

import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const Skills = ({ isHome }) => {
  const { skills } = useContext(Context);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('All Skills');

  useEffect(() => {
    setDisplayedSkills([...skills]);
  }, [skills]);

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
      {skills.length > 0 && isHome && (
        <button id="view-all-skills-btn">
          <Link to="/skills">View All Skills</Link>
        </button>
      )}
    </div>
  );
};

export default Skills;

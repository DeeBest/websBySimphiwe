import SkillCard from '../skillCard/SkillCard';
import './skillsCategoryCard.css';
import { FaTriangleExclamation } from 'react-icons/fa6';

const SkillsCategoryCard = ({ categoryTitle, skillsArr }) => {
  if (skillsArr.length <= 0) {
    return (
      <section id="no-projects-sec">
        <FaTriangleExclamation />
        <h1 id="no-projects-h1">There are currently no skills to display.</h1>
      </section>
    );
  } else {
    return (
      <div className="skills-category-card">
        <h3>{categoryTitle}</h3>
        <div id="skills-cards-div">
          {skillsArr.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    );
  }
};
export default SkillsCategoryCard;

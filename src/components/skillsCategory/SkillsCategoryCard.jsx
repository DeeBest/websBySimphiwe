import SkillCard from '../skillCard/SkillCard';
import './skillsCategoryCard.css';

const SkillsCategoryCard = ({ categoryTitle, skillsArr }) => {
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
};
export default SkillsCategoryCard;

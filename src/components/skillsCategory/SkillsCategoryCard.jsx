import SkillCard from '../skillCard/SkillCard';
import './skillsCategoryCard.css';

const SkillsCategoryCard = ({ skillCategory }) => {
  return (
    <div className="skills-category-card">
      <h3>{skillCategory.category}</h3>
      <div id="skills-cards-div">
        {skillCategory.skills.map((skill, index) => {
          return <SkillCard key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};
export default SkillsCategoryCard;

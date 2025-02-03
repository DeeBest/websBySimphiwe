import './skillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-img-container">
        <img src={skill.skillImgUrl} alt={skill.skillName + ` icon`} />
      </div>
      <div className="skill-desc-container">
        <h4>{skill.skillName}</h4>
        <p>{skill.skillDesc}</p>
      </div>
    </div>
  );
};
export default SkillCard;

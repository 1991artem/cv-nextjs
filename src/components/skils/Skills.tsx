import Languaes from "./Languaes";
import TechSkills from "./TechSkills";
import RelevantExpirience from "./RelevantExpirience";
import Software from "./SoftwareSkills";

function Skills() {
  return ( 
    <div className="skills-container">
      <TechSkills />
      <Software />
      <Languaes />
      <RelevantExpirience />
    </div>
    );
}

export default Skills;

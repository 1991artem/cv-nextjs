import SkillBootstrap from "./skills-items/tech-skills/SkillBootstrap";
import SkillCss from "./skills-items/tech-skills/SkillCss";
import SkillExpress from "./skills-items/tech-skills/SkillExpress";
import SkillFigma from "./skills-items/tech-skills/SkillFigma";
import SkillGit from "./skills-items/tech-skills/SkillGit";
import SkillHtml from "./skills-items/tech-skills/SkillHtml";
import SkillJs from "./skills-items/tech-skills/SkillJs";
import SkillMongo from "./skills-items/tech-skills/SkillMongo";
import SkillNest from "./skills-items/tech-skills/SkillNest";
import SkillNode from "./skills-items/tech-skills/SkillNode";
import SkillNpm from "./skills-items/tech-skills/SkillNpm";
import SkillPsql from "./skills-items/tech-skills/SkillPsql";
import SkillReact from "./skills-items/tech-skills/SkillReact";
import SkillRedux from "./skills-items/tech-skills/SkillRedux";
import SkillScss from "./skills-items/tech-skills/SkillScss";
import SkillTs from "./skills-items/tech-skills/SkillTs";
import SkillWebpack from "./skills-items/tech-skills/SkillWebpack";

function TechSkills() {
  return ( 
    <div className="skills">
      <p>Tech-Stack</p>
      <div className="skills-container">
        <SkillHtml />
        <SkillCss />
        <SkillJs />
        <SkillTs />
        <SkillReact />
        <SkillScss />
        <SkillFigma />
        <SkillRedux />
        <SkillGit />
        <SkillBootstrap />
        <SkillWebpack />
        <SkillNode />
        <SkillExpress />
        <SkillNest />
        <SkillMongo />
        <SkillNpm />
        <SkillPsql />
      </div>
    </div>
    );
}

export default TechSkills;

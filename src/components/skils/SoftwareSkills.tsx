import Vscode from "./skills-items/soft-skill/Vscode";
import WebStorm from "./skills-items/soft-skill/WebStorm";
import Sublime from './skills-items/soft-skill/Sublime';
import Postman from "./skills-items/soft-skill/Postman";
import Docker from "./skills-items/soft-skill/Docker";
import Trello from "./skills-items/soft-skill/Trello";
import Sourcetree from "./skills-items/soft-skill/Sourcetree";
import DBevier from "./skills-items/soft-skill/DBevier";
import SkillFigma from "./skills-items/tech-skills/SkillFigma";
import SkillMongo from "./skills-items/tech-skills/SkillMongo";
import SkillPsql from "./skills-items/tech-skills/SkillPsql";

function Software() {
  return ( 
    <div className="skills">
        <p>Software experience</p>
      <div className="skills-container">
        <Vscode />
        <WebStorm />
        <Docker />
        <Trello />
        <Sublime />
        <Postman />
        <Sourcetree />
        <DBevier />
        <SkillPsql />
        <SkillMongo />
        <SkillFigma />
      </div>
    </div>
   );
}

export default Software;

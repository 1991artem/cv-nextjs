import Footer from "@/components/footer/Footer";
import NavigateHeader from "@/components/nav/Nav";
import ProjectItem from "@/components/projects/ProjectItem";
import { ProjectType } from "@/components/types/types";
import { useState, useEffect } from "react";

const workArray: ProjectType[] = [
  {
    'Name': 'TODOS (React, Express)',
    'GitHub': 'https://github.com/1991artem/beejee-todos/tree/develop',
    'Deploy': 'https://beejee-todos.netlify.app/',
    'Description': `Task application (ToDo list). Backend on Node.js (Express), frontend on React using central storage (redux).
    The database is relational.
    Application deployed on free hosting`,
    'Technologies': ['React', 'Readux', 'Typescript', 'Node.js (Express)', 'REST API', 'GitHub', 'HTML', 'SCSS/CSS', 'PostgreSQL', 'TypeORM'],
  },
  {
    'Name': 'TODOS (Express)',
    'GitHub': 'https://github.com/1991artem/pixelplex_todo',
    'Deploy': '',
    'Description': `Creating a REST API for the TODOS app`,
    'Technologies': ['Node.js (Express)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'TypeORM'],
  },
  {
    'Name': 'File Uploder, PDF-converter (NestJS)',
    'GitHub': 'https://github.com/1991artem/nest-file-test',
    'Deploy': '',
    'Description': `Uploading an image to the database, Uploading a PDF template from the database`,
    'Technologies': ['Node.js (NestJS)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'TypeORM'],
  },
  {
    'Name': 'TODOS (React Native)',
    'GitHub': 'https://github.com/1991artem/slmax-testovoe-zadanie',
    'Deploy': '',
    'Description': `Creation of the TODOS mobile application`,
    'Technologies': ['React Native', 'Expo', 'Typescript', 'GitHub'],
  },
]


function Projects() {
  const [project, setProject] = useState([] as ProjectType[])

  useEffect(()=>{
    setProject(workArray)
  }, [])
  return ( 
    <div className="projects">
      <NavigateHeader />
      <p className="projects_title">MY PROJECTS</p>
      {
        project.map((item: ProjectType) => <ProjectItem data={item} key={item.GitHub} />)
      }
      <Footer />
    </div>
    );
}

export default Projects;
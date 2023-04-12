import { useState, useEffect } from 'react';
import { ExperienceType } from "../types/types";
import ExpItem from "./ExpItem";


const workArray: ExperienceType[] = [
  {
    'Company': 'SLMax',
    'Company Location': 'Belarus',
    'Duration': '2022 -',
    'Description': '',
    'Position': 'React/React Native Developer',
    'Technologies': ['React.js', 'React Native', 'Redux', 'Node.js (Express, NestJS)', 'Javascript ES6+', 'Typescript', 'GitHub', 'HTML', 'SCSS/CSS'],
  },
  {
    'Company': 'NP LLC "AKOVA',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2011-2022',
    'Description': '',
    'Position': 'Lead Engineer',
    'Technologies': ['AutoСad', 'Windows', 'MS Word', 'MS Exel', 'Solid Works'],
  }
]

const educationArray: ExperienceType[] = [
  {
    'Company': 'Pixelpex',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Trainee',
    'Technologies': ['Node.js (Express, NestJS)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'MongoDB', 'TypeORM'],
  },
  {
    'Company': 'RS School (EPAM)',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Student',
    'Technologies': ['React.js', 'Node.js (Express)', 'Javascript ES6+', 'Typescript', 'GitHub', 'Webpack', 'HTML', 'SCSS/CSS', 'DOM'],
  },
  {
    'Company': 'IT-Logia',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Student',
    'Technologies': ['Angular ', 'Typescript', 'HTML', 'SCSS/CSS'],
  },
  {
    'Company': 'Belarusian National Technical University',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2008 - 2013',
    'Description': '',
    'Position': 'Student / Engineer',
    'Technologies': [],
  },
]


function Experience() {
  const [work, setWork] = useState([] as ExperienceType[])
  const [education, setEducation] = useState([] as ExperienceType[])

  useEffect(()=>{
    setWork(workArray)
    setEducation(educationArray)
  }, [])

  return ( 
    <div className="experience">
      <p className="experience_title">PROFESSIOANL EXPERIENCE</p>
      {
        work.map((item: ExperienceType) =>( <ExpItem data={item} key={item.Company}/>))
      }
      <p className="experience_title">EDUCATION</p>
      {
        education.map((item: ExperienceType) =>( <ExpItem data={item} key={item.Company}/>))
      }
    </div>
    );
}

export default Experience;

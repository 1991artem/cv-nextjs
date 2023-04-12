export interface IExpItem {
  data: ExperienceType;
}

export interface IProjectItem {
  data: ProjectType;
}

export type ExperienceType = {
  'Company': string,
  'Company Location': string,
  'Duration': string,
  'Description'?: string,
  'Position': string,
  'Technologies'?: string[],
}

export type ProjectType = {
  'Name': string,
  'GitHub': string,
  'Deploy': string,
  'Description': string,
  'Technologies'?: string[],
}
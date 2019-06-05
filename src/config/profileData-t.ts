export type EducationItem = {
  type : String, // e.g High School, Bachelors
  notes? : String[], // Additional bullet point items, e.g academic captain, ...
  location : String, // e.g Belmont High School
  startYear : Number,
  endYear : Number | "Ongoing",
}

export type ProjectItem = {
  title : String,
  description : String,
  linkURL : String, // url to more information / directly to project
  imageURLS : String[], // urls of images for a slideshow widget
}

export type SkillItem = {
  name : String, // Name of skill
  abilityLabel : String,
  iconURL? : String, // url pointing to skill icon
}

export type EmploymentItem = {
  name : String, // name of employer / employing business
  notes? : String[],
  startYear : Number,
  endYear : Number | "Ongoing",
}

export type ProfileData = {
  name : String,
  bio : String,
  footerText : String,
  skills : SkillItem[],
  skillsDescription: String,
  education: EducationItem[],
  projects: ProjectItem[],
  employment: EmploymentItem[]
}

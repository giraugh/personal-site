import {SkillItem, ProfileData, EducationItem, ProjectItem, EmploymentItem} from './profileData-t'

export const skills : SkillItem[] = [
  {
    name: 'Javascript',
    ability: .9
  },
  {
    name: 'Functional JS',
    ability: .9
  },
  {
    name: 'React',
    ability: .7
  },
  {
    name: 'ExpressJS',
    ability: .5
  },
  {
    name: 'Lua',
    ability: .6
  },
  {
    name: 'C#',
    ability: .4
  },
  {
    name: 'Haskell',
    ability: .4
  },
  {
    name: 'Japanese Langauge',
    ability: .2
  },
  {
    name: 'Indonesian Language',
    ability: .4
  },
  {
    name: 'Design',
    ability: .7
  },
  {
    name: 'Illustration',
    ability: .4
  }
]

export const education : EducationItem[] = [
  {
    type: 'High School',
    notes: ['Academic Captain', 'G-Force IT Award'],
    location: 'Belmont High School',
    startYear: 2013,
    endYear: 2019
  }
]

export const projects : ProjectItem[] = [
  {
    title: 'Hex-Redux',
    description: 'An online tool for writing JS bots to play games of HEX.',
    linkURL: 'http://ewanb.me/hex-redux',
    imageURLS: []
  },
  {
    title: 'Another Expert Telegram',
    description: 'A match-several mobile game on the play store. Created using GameMaker: Studio.',
    linkURL: 'https://play.google.com/store/apps/details?id=com.tdos.anothertelegram',
    imageURLS: []
  }
]

export const employment : EmploymentItem[] = [
  {
    businessName: 'Geelong Waterfront Bungy Trampolines',
    notes: [],
    startYear: 2016,
    endYear: "Ongoing"
  }
]

const data : ProfileData = {
  name: 'Ewan Breakey',
  bio: `Student who likes to program, especially in purely functional languages.`,
  skills,
  education,
  projects,
  employment,
}

export default data

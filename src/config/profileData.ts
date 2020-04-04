import {SkillItem, ProfileData, EducationItem, ProjectItem, EmploymentItem} from './profileData-t'
const homePageImagesURL = 'http://retroverse.github.io/homepage-resources/img'

export const skills : SkillItem[] = [
  {
    name: 'Javascript',
    abilityLabel: '6 years'
  },
  {
    name: 'Functional JS',
    abilityLabel: '4 years'
  },
  {
    name: 'React',
    abilityLabel: '2 years'
  },
  {
    name: 'ExpressJS',
    abilityLabel: '2 years'
  },
  {
    name: 'Lua',
    abilityLabel: '3 years'
  },
  {
    name: 'C#',
    abilityLabel: '2 years'
  },
  {
    name: 'Haskell',
    abilityLabel: '2 years'
  },
  {
    name: 'Rust',
    abilityLabel: '< 1 Year'
  },
  {
    name: 'Japanese',
    abilityLabel: '1 year'
  },
  {
    name: 'Design',
    abilityLabel: '3 years'
  },
  {
    name: 'Illustration',
    abilityLabel: '2 year'
  }
]

export const education : EducationItem[] = [
  {
    type: 'High School',
    notes: ['Academic Captain', 'G-Force IT Award'],
    location: 'Belmont High School',
    startYear: 2013,
    endYear: 2019
  },
  {
    type: 'Computer Science',
    notes: [],
    location: 'RMIT',
    startYear: 2020,
    endYear: "Ongoing"
  }
]

export const projects : ProjectItem[] = [
  {
    title: 'Hex-Redux',
    description: 'An online tool for writing and testing javascript bots that play games of HEX.',
    linkURL: 'http://ewanb.me/hex-redux',
    imageURLS: [`${homePageImagesURL}/projects/hex-redux.gif`]
  },
  {
    title: 'Another Expert Telegram',
    description: 'A match-several mobile game on the play store.',
    linkURL: 'https://play.google.com/store/apps/details?id=com.tdos.anothertelegram',
    imageURLS: [`${homePageImagesURL}/projects/expert.gif`]
  },
  {
    title: 'Knight Game',
    description: 'A platforming MOBA. Winner of secondary video game ACMI screen-it 2017.',
    linkURL: 'https://tdos.itch.io/knight-game',
    imageURLS: [`${homePageImagesURL}/projects/knight.gif`]
  },
  {
    title: 'Squish',
    description: 'A platforming party game where you jump on each others heads.',
    linkURL: 'http://ewanb.me/squish',
    imageURLS: [`${homePageImagesURL}/projects/squish-faster-better.gif`]
  },
  {
    title: 'Fish Boy',
    description: 'An endless platforming game made for Ludum Dare 39. Made in cooperation with LogBoi.',
    linkURL: 'https://tdos.itch.io/fishy',
    imageURLS: [`${homePageImagesURL}/projects/fish.gif`]
  },
  {
    title: 'Galana',
    description: 'A brutal and minimalist scrolling shooter with epic boss battles for android phones.',
    linkURL: 'https://tdos.itch.io/galana',
    imageURLS: [`${homePageImagesURL}/projects/galana.gif`]
  },
  {
    title: 'Clink',
    description: 'An 8-bit adventure game made in pico-8.',
    linkURL: 'http://ewanb.me/clink',
    imageURLS: [`${homePageImagesURL}/projects/clink.png`]
  },
  {
    title: 'RL',
    description: 'A very simple roguelite game made for Ludum Dare 32.',
    linkURL: 'https://tdos.itch.io/rl',
    imageURLS: [`${homePageImagesURL}/projects/rl.png`]
  },
  {
    title: 'How to Get Rich!',
    description: 'A beat em up game made for Ludum Dare 40.',
    linkURL: 'https://tdos.itch.io/rich',
    imageURLS: [`${homePageImagesURL}/projects/get-rich.png`]
  },
  {
    title: 'Prosperity',
    description: 'A (roleplaying?) decision making game made for Ludum Dare 34.',
    linkURL: 'https://tdos.itch.io/prosperity',
    imageURLS: [`${homePageImagesURL}/projects/prosperity.png`]
  },
  {
    title: 'Spades',
    description: 'A space dogfighting game made to test limits of particles in Unity. Has particles in *Spades*.',
    linkURL: 'https://tdos.itch.io/spades',
    imageURLS: [`${homePageImagesURL}/projects/spades.png`]
  },
  {
    title: 'Pacmascii',
    description: 'Pacman in ASCII',
    linkURL: 'http://ewanb.me/Pacmascii',
    imageURLS: [`${homePageImagesURL}/projects/pacmascii.png`]
  },
  {
    title: 'Untitled Archery Game',
    description: 'Protype for a twin stick archery game.',
    linkURL: '',
    imageURLS: [`${homePageImagesURL}/projects/archery.png`]
  },
  {
    title: 'Untitled Platforming Game',
    description: 'Prototype for a platforming game.',
    linkURL: '',
    imageURLS: [`${homePageImagesURL}/projects/plat.gif`]
  },
  {
    title: 'Tricky Behind Shot',
    description: 'An unfinished simplistic board game for mobile devices and the web.',
    linkURL: '',
    imageURLS: [`${homePageImagesURL}/projects/tbs.png`]
  }
]

export const employment : EmploymentItem[] = [
  {
    name: 'Attraction Ride Operator',
    notes: ['Customer Service', 'Sales', 'Safety'],
    startYear: 2016,
    endYear: 2020
  }
]

export const skillsDescription = `
I have studied programming now for a handful of years and have a
particular passion for functional programming with languages like Haskell and Javascript.
Additionally, I have studied several real-world languages, namely, Indonesian and Japanese. On top of that,
I really enjoy user interface design and composition work.
`

export const footerText = `Ewan Breakey 2020~github~twitter`

const data : ProfileData = {
  name: 'Ewan Breakey',
  bio: ``,
  footerText,
  skills,
  skillsDescription,
  education,
  projects,
  employment,
}

export default data

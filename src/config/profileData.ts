import {SkillItem, ProfileData, EducationItem, ProjectItem, EmploymentItem} from './profileData-t'
const homePageImagesURL = 'http://retroverse.github.io/homepage-resources/img'

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
    ability: .45
  },
  {
    name: 'Japanese',
    ability: .3
  },
  {
    name: 'Indonesian',
    ability: .35
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
    endYear: "Ongoing"
  }
]

export const projects : ProjectItem[] = [
  {
    title: 'Hex-Redux',
    description: 'An online tool for writing JS bots to play games of HEX.',
    linkURL: 'http://ewanb.me/hex-redux',
    imageURLS: [`${homePageImagesURL}/projects/hex-redux.gif`]
  },
  {
    title: 'Another Expert Telegram',
    description: 'A match-several mobile game on the play store. Created using GameMaker: Studio.',
    linkURL: 'https://play.google.com/store/apps/details?id=com.tdos.anothertelegram',
    imageURLS: [`${homePageImagesURL}/projects/expert.gif`]
  },
  {
    title: 'Knight Game',
    description: 'A platformer MOBA made for ACMI screenit 2017. Winner of secondary video game ACMI screen-it 2017.',
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
    description: 'An endless platforming game made for Ludum Dare 39.',
    linkURL: 'https://tdos.itch.io/fishy',
    imageURLS: [`${homePageImagesURL}/projects/fish.gif`]
  },
  {
    title: 'Galana',
    description: 'A brutal minimalist scrolling shooter with cool boss battles.',
    linkURL: '',
    imageURLS: [`${homePageImagesURL}/projects/galana.gif`]
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
    title: 'Clink',
    description: 'An 8-bit adventure game made in pico-8.',
    linkURL: 'http://ewanb.me/clink',
    imageURLS: [`${homePageImagesURL}/projects/clink.png`]
  },
  {
    title: 'Pacmascii',
    description: 'Pacman in ASCII',
    linkURL: 'http://ewanb.me/pacmascii',
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
    description: 'An unfinished simplistic board game for mobile devices.',
    linkURL: '',
    imageURLS: [`${homePageImagesURL}/projects/tbs.png`]
  }
]

export const employment : EmploymentItem[] = [
  {
    name: 'Attraction Ride Operator',
    notes: ['Customer Service', 'Sales', 'Safety'],
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

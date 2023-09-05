import {
  IconBrandCSharp,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandCypress,
  IconBrandVue,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
} from '@tabler/icons-react'
import Section from './partials/Section'

const projects = [
  {
    names: ['Welfare Management System (WMS)'],
    companies: ['Yanmar S.P. Co., Ltd.'],
    techs: ['C#'],
  },
  {
    names: ['Insurance Management System for Agents'],
    companies: [
      'Alianz Ayudhya Assurance Plc.',
      'Samsung Life Insurance (Thailand) Plc.',
    ],
    techs: ['Javascript', 'React', 'cypress'],
  },
  {
    names: ['The 1 Central Website'],
    companies: ['The 1 Central Co., Ltd.'],
    techs: ['Javascript', 'Vue'],
  },
  {
    names: ['OPN Gateway Authentication', 'Payment Links Plus Management'],
    companies: ['OPN Co., Ltd.'],
    techs: ['Typescript', 'Next.js', 'cypress', 'tailwindcss'],
  },
  {
    names: ['SEAC Thailand Website', 'Game Dashboard and Management'],
    companies: ['SEASIA Leadavation Center Co., Ltd.'],
    techs: ['Typescript', 'Next.js', 'tailwindcss'],
  },
]

const TechIcon: React.FC<{ tech: string }> = ({ tech }) => {
  switch (tech) {
    case 'C#':
      return (
        <IconBrandCSharp className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'Javascript':
      return (
        <IconBrandJavascript className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'React':
      return (
        <IconBrandReact className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'cypress':
      return (
        <IconBrandCypress className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'Vue':
      return <IconBrandVue className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
    case 'Typescript':
      return (
        <IconBrandTypescript className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'Next.js':
      return (
        <IconBrandNextjs className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    case 'tailwindcss':
      return (
        <IconBrandTailwind className="h-8 w-8 drop-shadow-xl xl:h-12 xl:w-12" />
      )
    default:
      return ''
  }
}

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <h1 className="text-4xl font-bold xl:text-6xl">Projects</h1>
      <div className="grid grid-cols-1 items-center justify-center gap-4 text-center xl:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex h-full flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center">
              {project.names.map((name, index) => (
                <h2 key={index} className="text-2xl font-bold xl:text-4xl">
                  {name}
                </h2>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              {project.companies.map((company, index) => (
                <h3 key={index} className="text-xl font-bold xl:text-2xl">
                  {company}
                </h3>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2">
              {project.techs.map((tech, index) => (
                <TechIcon key={index} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects

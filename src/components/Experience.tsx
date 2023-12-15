import Section from './partials/Section'

const experiences = [
  {
    year: '2018 - 2019',
    role: 'Software Developer',
    company: 'C.S.I. Group Co., Ltd.',
    companyLink: 'https://www.csigroups.com/',
  },
  {
    year: '2019 - 2020',
    role: 'Frontend Developer',
    company: 'Appman Co., Ltd.',
    companyLink: 'https://www.appman.co.th/',
  },
  {
    year: '2020 - 2021',
    role: 'Full-stack Developer',
    company: 'The 1 Central Co., Ltd.',
    companyLink: 'https://www.the1.co.th/',
  },
  {
    year: '2021 - Present',
    role: 'Frontend Developer',
    company: 'TechCombine Co., Ltd.',
    companyLink: 'https://www.techcombine.co/',
  },
  {
    year: '2021 - 2022',
    role: 'Full-stack Developer',
    company: 'OPN Co., Ltd.',
    companyLink: 'https://www.opn.ooo/',
  },
  {
    year: '2022 - Present',
    role: 'Frontend Developer',
    company: 'SEASIA Leadavation Center Co., Ltd.',
    companyLink: 'https://www.seasiacenter.com/',
  },
]

const WorkExperience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-center xl:h-auto xl:gap-8">
        <h1 className="text-4xl font-bold xl:text-6xl">Education</h1>
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          I interned at{' '}
          <a
            href="https://www.csigroups.com/"
            className="text-blue-500 transition-all duration-500 hover:text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            C.S.I. Group Co., Ltd.
          </a>{' '}
          as a software developer in 2017.
          <br className="max-xl:hidden" /> After that, I earned my
          bachelor&apos;s degree in Informatics at Burapha University in 2018.
          <br />
          <span className="text-xs text-gray-500">
            It&apos;s quite a plain journey, that&apos;s why I keep learning and
            improving myself.
          </span>
        </h2>
      </div>
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-center xl:h-auto xl:gap-8">
        <h1 className="text-4xl font-bold xl:text-6xl">Experience</h1>
        <div className="flex w-full flex-col items-center gap-4 text-center xl:gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center text-center xl:flex-row xl:gap-4 xl:text-left"
            >
              <h2 className="text-2xl font-bold xl:text-4xl">
                {experience.year}
                {': '} <br className="xl:hidden" />
                {experience.role} <br className="xl:hidden" />
                <span className="max-xl:hidden">for</span>{' '}
                <a
                  className="text-blue-500 transition-all duration-500 hover:text-blue-800"
                  href={experience.companyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.company}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default WorkExperience

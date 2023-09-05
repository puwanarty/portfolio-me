import Section from './partials/Section'

const AboutMe: React.FC = () => {
  return (
    <Section id="about-me">
      <div className="flex flex-col items-center justify-center gap-4 text-center xl:gap-8">
        <h1 className="text-4xl font-bold xl:text-6xl">About Me</h1>
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          I've worked with teams that are capable and accountable for their
          work.
          <br className="max-xl:hidden" /> With a strong interest in web
          development and programming.
          <br className="max-xl:hidden" /> I'm committed to becoming a front-end
          specialist.
        </h2>
      </div>
    </Section>
  )
}

export default AboutMe

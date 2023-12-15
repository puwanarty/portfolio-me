import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import Section from './partials/Section'

const ContactMe: React.FC = () => {
  return (
    <Section id="contact-me">
      <div className="flex flex-col items-center justify-center gap-4 text-center xl:gap-12">
        <h1 className="text-4xl font-bold xl:text-6xl">Contact Me</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-12">
          <a
            href="https://github.com/puwanarty/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24" />
          </a>
          <a
            href="https://www.linkedin.com/in/puwanarty/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandLinkedin className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24" />
          </a>
          <a
            href="mailto:puwanart.tin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IconMail className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24" />
          </a>
        </div>
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          Thank you for visiting my portfolio! <br /> I hope you have a great
          day!
        </h2>
      </div>
    </Section>
  )
}

export default ContactMe

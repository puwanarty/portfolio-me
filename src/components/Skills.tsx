import {
  IconBrandCSharp,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVite,
  IconBrandVue,
  IconBrandDiscord,
  IconBrandTailwind,
  IconBrandTabler,
  IconBrandStorybook,
  IconBrandCypress,
} from '@tabler/icons-react'
import Section from './partials/Section'

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center justify-center gap-4 text-center xl:gap-12">
        <h1 className="text-4xl font-bold xl:text-6xl">Skills</h1>
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          Languages
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-12">
          {['c-sharp', 'javascript', 'typescript'].map((language, index) =>
            language === 'c-sharp' ? (
              <IconBrandCSharp
                key={index}
                className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
              />
            ) : language === 'javascript' ? (
              <IconBrandJavascript
                key={index}
                className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
              />
            ) : language === 'typescript' ? (
              <IconBrandTypescript
                key={index}
                className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
              />
            ) : null
          )}
        </div>
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          Frameworks
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-12">
          {['react', 'nextjs', 'vitejs', 'vuejs', 'discordjs'].map(
            (framework, index) =>
              framework === 'react' ? (
                <IconBrandReact
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : framework === 'nextjs' ? (
                <IconBrandNextjs
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : framework === 'vitejs' ? (
                <IconBrandVite
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : framework === 'vuejs' ? (
                <IconBrandVue
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : framework === 'discordjs' ? (
                <IconBrandDiscord
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : null
          )}
        </div>
        <h2 className="flex-wrap text-center text-2xl font-bold xl:text-4xl">
          Libraries
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-12">
          {['tailwindcss', 'tabler-icons', 'storybook', 'cypress'].map(
            (library, index) =>
              library === 'tailwindcss' ? (
                <IconBrandTailwind
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : library === 'tabler-icons' ? (
                <IconBrandTabler
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : library === 'storybook' ? (
                <IconBrandStorybook
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : library === 'cypress' ? (
                <IconBrandCypress
                  key={index}
                  className="h-14 w-14 text-black drop-shadow-xl xl:h-24 xl:w-24"
                />
              ) : null
          )}
        </div>
      </div>
    </Section>
  )
}

export default Skills

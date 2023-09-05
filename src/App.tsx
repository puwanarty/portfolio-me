import React from 'react'
import Prologue from './components/Prologue'
import AboutMe from './components/AboutMe'
import WorkExperiences from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center font-sriracha">
      <Prologue />
      <AboutMe />
      <WorkExperiences />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  )
}

export default App

import { createContext, useContext, useState } from 'react'
import { ObserverContext } from './ObserverContext'
import cx from 'classnames'
import { ScrollContext } from './ScrollContext'
import { IconChevronUp, IconChevronsLeft } from '@tabler/icons-react'

interface NavbarContextProps {
  children: React.ReactNode
}

export const NavbarContext = createContext({})

export const NavbarContextProvider: React.FC<NavbarContextProps> = ({
  children,
}) => {
  const { currentSection } = useContext(ObserverContext)
  const { isBottom, handleScrollTo, handleScrollToTop } =
    useContext(ScrollContext)
  const [show, setShow] = useState(true)

  return (
    <NavbarContext.Provider value={{}}>
      <button
        className={cx(
          'fixed right-0 top-0 z-30 hidden xl:flex',
          currentSection === 'prologue'
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        )}
        onClick={() => setShow(!show)}
      >
        <IconChevronsLeft
          className={cx(
            'h-8 w-8 transition-all duration-1000',
            show ? '-rotate-180' : 'rotate-0'
          )}
        />
      </button>
      <div
        className={cx(
          'fixed right-0 top-0 z-20 hidden h-screen w-1/12 flex-col items-center justify-center xl:flex',
          'font-sriracha transition-all duration-1000',
          currentSection === 'prologue' || !show
            ? 'pointer-events-none translate-x-10 opacity-0'
            : 'translate-x-0 opacity-100'
        )}
      >
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            {['about-me', 'experience', 'skills', 'projects', 'contact-me'].map(
              (section, index) => (
                <button key={index} onClick={() => handleScrollTo(section)}>
                  <h1
                    className={cx(
                      'text-center font-bold mix-blend-difference transition-all duration-500',
                      currentSection === section
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-100'
                    )}
                  >
                    {section
                      .split('-')
                      // capitalize each word
                      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                      .join(' ')}
                  </h1>
                </button>
              )
            )}
          </div>
        </div>
      </div>
      {children}
      <button onClick={() => handleScrollToTop()}>
        <IconChevronUp
          className={cx(
            'fixed bottom-12 left-1/2 z-30 -translate-x-1/2 transform',
            'mx-auto h-12 w-12 text-black blur-xs transition-all duration-1000 hover:scale-110 hover:opacity-100 hover:blur-none xl:h-24 xl:w-24',
            isBottom
              ? 'animate-pulse opacity-100'
              : 'pointer-events-none translate-y-10 opacity-0'
          )}
        />
      </button>
    </NavbarContext.Provider>
  )
}

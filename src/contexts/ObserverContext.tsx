import { createContext, useCallback, useEffect, useState } from 'react'

interface ObserverContextState {
  currentSection: string
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>
}

interface ObserverContextProviderProps {
  children: React.ReactNode
}

export const ObserverContext = createContext<ObserverContextState>({
  currentSection: '',
  setCurrentSection: () => {},
})

export const ObserverContextProvider: React.FC<
  ObserverContextProviderProps
> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('')

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    })

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [handleIntersection])

  return (
    <ObserverContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ObserverContext.Provider>
  )
}

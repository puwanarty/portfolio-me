import { createContext, useCallback, useEffect, useState } from 'react'

interface ScrollContextState {
  scrollY: number
  isBottom: boolean
  handleScrollTo: (target: string | number) => void
  handleScrollToTop: () => void
}

interface ScrollContextProps {
  children: React.ReactNode
}

export const ScrollContext = createContext<ScrollContextState>({
  scrollY: 0,
  isBottom: false,
  handleScrollTo: () => {},
  handleScrollToTop: () => {},
})

export const ScrollProvider = ({ children }: ScrollContextProps) => {
  const [scrollY, setScrollY] = useState(0)
  const [isBottom, setIsBottom] = useState(false)

  // todo: create function to scroll to target element or position

  const handleScrollTo = (target: string | number) => {
    // if target is a number, scroll to that position
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      })
      return
    }
    // else scroll to target element id
    const el = document.getElementById(target)
    if (!el) return
    const elTop = el.offsetTop
    window.scrollTo({
      top: elTop,
      behavior: 'smooth',
    })
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }, [scrollY])

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        isBottom,
        handleScrollTo,
        handleScrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

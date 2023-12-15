import { useCallback, useContext, useRef, useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import cx from 'classnames'
import { ScrollContext } from '../contexts/ScrollContext'

const Prologue: React.FC = () => {
  const { scrollY, handleScrollTo } = useContext(ScrollContext)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  let progress = 0

  const ref = useRef<HTMLDivElement>(null)
  const elContainer = ref.current

  if (elContainer) {
    const elHeight = elContainer.clientHeight
    progress = Math.min(1, scrollY / elHeight)
  }

  const messages = ['Puwanart Y.', 'Frontend Developer']

  return (
    <div
      ref={ref}
      className={cx(
        'flex h-full w-full flex-col items-center justify-center gap-2',
        // for prevent instant scroll to top when refresh page
        progress === 1 && 'opacity-0'
      )}
      style={{
        // https://www.pexels.com/photo/photography-of-macbook-half-opened-on-white-wooden-surface-633409/
        backgroundImage: 'url(/images/pexels-filippo-bergamaschi.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        textShadow: '0.2rem 0.2rem 0.2rem rgba(255, 255, 255, 0.1)',
      }}
    >
      <section
        id="prologue"
        className={cx(
          'flex min-h-screen max-w-5/6 flex-col items-center justify-between py-12 transition-all duration-1000 xl:max-w-screen-xl xl:py-4',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <span />
        <div className="flex flex-col items-center justify-center gap-4 xl:gap-8">
          <img
            // todo: change image to my image
            src="/images/hacker.png"
            alt="profile"
            className="h-48 w-48 rounded-full object-cover xl:h-56 xl:w-56"
            onLoad={handleImageLoaded}
          />
          {messages.map((message, index) => (
            <h1
              key={index}
              className="text-center text-4xl font-bold text-white mix-blend-difference transition-all duration-1000 xl:text-6xl"
            >
              {message}
            </h1>
          ))}
        </div>

        <button onClick={() => handleScrollTo('about-me')}>
          <IconChevronDown
            className={cx(
              'h-12 w-12 text-white blur-xs transition-all duration-1000 hover:scale-110 hover:opacity-100 hover:blur-none xl:h-24 xl:w-24',
              imageLoaded
                ? 'animate-pulse opacity-100'
                : '-translate-y-10 opacity-0'
            )}
          />
        </button>
      </section>
    </div>
  )
}

export default Prologue

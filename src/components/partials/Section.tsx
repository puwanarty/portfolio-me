import cx from 'classnames'

interface SectionProps {
  id: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <div
      className={cx(
        'z-10 flex h-full w-full flex-col items-center justify-center gap-2 bg-white transition-all delay-200 duration-1000'
        // todo: add transition in
        // rendered ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        textShadow: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
      }}
    >
      <section
        id={id}
        className={cx(
          'flex min-h-screen max-w-screen-md flex-col items-center justify-evenly p-4 xl:max-w-5/6 xl:p-8'
        )}
      >
        {children}
      </section>
    </div>
  )
}

export default Section

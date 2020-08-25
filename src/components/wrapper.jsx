import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react"
import { useSpring, animated } from "react-spring"
import SEO from "./seo"
import Logo from "./logo"
import styles from "../scss/wrapper.module.scss"
import "../scss/styles.global.scss"

const LocaleContext = createContext()
const ThemeContext = createContext()

const Header = React.forwardRef(({ location }, ref) => (
  <div className={styles.header} ref={ref}>
    <Logo />
    <ThemeToggle />
  </div>
))

const ThemeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext)

  const [props, set] = useSpring(() => ({
    opacity: 1,
    pointerEvents: "all",
  }))

  useEffect(() => {
    const handleScroll = () => {
      set({
        opacity: window.pageYOffset > 100 ? 0 : 1,
        pointerEvents: window.pageYOffset > 100 ? "none" : "all",
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <animated.i
      className={styles.themeToggle}
      onClick={() => setDark(!dark)}
      title="toggle dark mode"
      style={props}
    >
      {
        <svg height="1.2rem" width="1.2rem">
          <circle
            className={styles.icon}
            cx="0.6rem"
            cy="0.6rem"
            r="0.5rem"
            strokeWidth="3"
          />
        </svg>
      }
    </animated.i>
  )
}

const Wrapper = ({ children, pageContext: { locale, type }, location }) => {
  const [dark, rawSetDark] = useState(false)

  const setDark = val => {
    rawSetDark(val)
    document.body.setAttribute("theme", val ? "dark" : "light")
    localStorage.setItem("dark", val ? "true" : "false")
  }

  const el = useRef(null)

  useEffect(() => {
    rawSetDark(document.body.getAttribute("theme") === "dark")

    const observer = new IntersectionObserver(
      ([e]) =>
        e.target.classList.toggle(styles.sticky, e.intersectionRatio < 1),
      { threshold: [1] }
    )

    observer.observe(el.current)
  }, [])

  return (
    <>
      <SEO location={location} />
      <LocaleContext.Provider value={{ locale, location, type }}>
        <ThemeContext.Provider value={{ dark, setDark }}>
          <div className={`${styles.wrapper}`}>
            <Header location={location} ref={el} />
            {children}
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </>
  )
}

export { Wrapper, LocaleContext, ThemeContext }

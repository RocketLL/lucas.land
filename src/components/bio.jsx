import React, { useContext } from "react"
import { Link } from "gatsby"
import styles from "../../src/scss/bio.module.scss"
import { LocaleContext } from "./wrapper"
import { logo as logoStyle } from "../scss/logo.module.scss"
import { useSpring, animated } from "react-spring"
import { BsArrowUpRight } from "react-icons/bs"


const Logo = ({ className }) => {
  const [props, set] = useSpring(() => ({
    transform: "translate(2000 0)",
    fillOpacity: 1,
    from: {
      fillOpacity: 0, transform: "translate(5000 0)",
    },
    config: {
      tension: 200,
      friction: 20
    }
  }))
  return (
    <Link
      to={"/"}
      className={`${logoStyle} ${className}`}
      onMouseEnter={() => set({
        transform: "translate(2500 0)",
        fillOpacity: 1,
      })}
      onMouseLeave={() => set({
        transform: "translate(2000 0)",
        fillOpacity: 1,
      })}
      onMouseDown={() => set({
        transform: "translate(6000 0)",
        fillOpacity: 0,
      })}
    >
      <animated.svg
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 8000 2000" style={{ enableBackground: "new 0 0 2000 2000" }} xmlSpace="preserve">
        <animated.g {...props}>
          <polygon points="1958.24,1436.35 1287.06,1281.39 1576.4,28.14 1136.38,28.14 869.31,1184.95 869.31,1184.95 
		772.87,1602.7 1190.62,1699.15 1190.62,1699.15 1958.24,1876.36"/>
          <polygon points="1229.74,1500.7 558.57,1345.74 847.91,92.49 407.89,92.49 140.82,1249.3 140.82,1249.3 
			44.37,1667.05 462.13,1763.5 462.13,1763.5 1229.74,1940.71"/>
        </animated.g>
      </animated.svg>
    </Link >
  )
}

const Mail = ({ to, className }) => {
  const [props, set] = useSpring(() => ({
    transform: "translate(-1rem, 1rem)",
    opacity: 0,
    config: {
      tension: 200,
      friction: 20
    }
  }))

  return (
    <a
      className={className}
      href={`mailto:${to}`}
      onMouseLeave={() => set({
        transform: "translate(-1rem, 1rem)",
        opacity: 0,
      })}
      onMouseEnter={() => set({
        transform: "translate(0px, 0px)",
        opacity: 1,
      })}
    >
      {to}
      <animated.i className={styles.icon} style={props}>
        <BsArrowUpRight size={"1.1em"} />
      </animated.i>
    </a>
  )
}

const Bio = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.bio}>
      <Logo className={styles.logo} />
      <h1 className={styles.name}>
        {locale === "en" ? "Lucas Lee" : "Lucas Lee"}
      </h1>
      <Mail to={"me@lucas.land"} className={styles.about} />
    </div>
  )
}

export { Logo }

export default Bio

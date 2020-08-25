import React from "react"
import styles from "../scss/link.module.scss"
import { BsArrowUpRight } from "react-icons/bs"
import { useSpring, animated } from "react-spring"
import { LayoutLink } from "./layout"

const Link = ({ children, to, size, className }) => {
  const [props, set] = useSpring(() => ({
    transform: "translate(-1rem, 1rem)",
    opacity: 0,
    config: {
      tension: 200,
      friction: 20,
    },
  }))

  const internal = /^\/(?!\/)/.test(to)

  return internal ? (
    <LayoutLink
      className={`${className} ${styles.link}`}
      to={to}
      onMouseLeave={() =>
        set({
          transform: "translate(-1rem, 1rem)",
          opacity: 0,
        })
      }
      onMouseEnter={() =>
        set({
          transform: "translate(0px, 0px)",
          opacity: 1,
        })
      }
    >
      {children}
      <animated.i className={styles.icon} style={props}>
        <BsArrowUpRight size={size} />
      </animated.i>
    </LayoutLink>
  ) : (
    <a
      className={`${className} ${styles.link}`}
      href={to}
      onMouseLeave={() =>
        set({
          transform: "translate(-1rem, 1rem)",
          opacity: 0,
        })
      }
      onMouseEnter={() =>
        set({
          transform: "translate(0px, 0px)",
          opacity: 1,
        })
      }
    >
      {children}
      <animated.i className={styles.icon} style={props}>
        <BsArrowUpRight size={size} />
      </animated.i>
    </a>
  )
}

export default Link

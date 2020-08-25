import React from "react"
import styles from "../scss/link.module.scss"
import { BsArrowUpRight } from "react-icons/bs"
import { useSpring, animated as ani } from "react-spring"
import { LayoutLink } from "./layout"
import { springConfig } from "./configs"

const Link = ({
  children,
  to,
  size = "1em",
  className,
  onMouseEnter,
  onMouseLeave,
  animated = true,
  styled = true,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(to)

  const [spring, set] = useSpring(() => ({
    transform: "translate(-1rem, 1rem)",
    opacity: 0,
    config: springConfig,
  }))

  return internal ? (
    <LayoutLink
      className={`${className} ${styled ? styles.link : null}`}
      to={to}
      onMouseLeave={
        animated
          ? () =>
              set({
                transform: "translate(-1rem, 1rem)",
                opacity: 0,
              })
          : onMouseLeave
      }
      onMouseEnter={
        animated
          ? () =>
              set({
                transform: "translate(0px, 0px)",
                opacity: 1,
              })
          : onMouseEnter
      }
      {...props}
    >
      {children}
      {animated && (
        <ani.i className={styles.icon} style={spring}>
          <BsArrowUpRight size={size} />
        </ani.i>
      )}
    </LayoutLink>
  ) : (
    <a
      className={`${className} ${styled ? styles.link : null}`}
      href={to}
      onMouseLeave={
        animated
          ? () =>
              set({
                transform: "translate(-1rem, 1rem)",
                opacity: 0,
              })
          : onMouseLeave
      }
      onMouseEnter={
        animated
          ? () =>
              set({
                transform: "translate(0px, 0px)",
                opacity: 1,
              })
          : onMouseEnter
      }
      {...props}
    >
      {children}
      {animated && (
        <ani.i className={styles.icon} style={spring}>
          <BsArrowUpRight size={size} />
        </ani.i>
      )}
    </a>
  )
}

export default Link

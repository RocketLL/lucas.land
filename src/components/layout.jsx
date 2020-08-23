import React from "react"

import { Spring, animated } from 'react-spring'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

import styles from "../scss/layout.module.scss"
import { link as linkStyle } from "../scss/link.module.scss"

const LeftState = ({ children }) => (
  <TransitionState>
    {({ mount, transitionStatus, exit, entry }) => {
      // const mount = ['entering', 'entered'].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          to={{
            opacity: mount ? 1 : 0
          }}
          config={{
            duration: seconds * 1000,
          }}
        >
          {props => <animated.div style={props}>{children}</animated.div>}
        </Spring>
      )
    }}
  </TransitionState >
)

const RightState = ({ children }) => (
  <TransitionState>
    {({ mount, transitionStatus, exit, entry }) => {
      // const mount = ['entering', 'entered'].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          to={{
            // transform: mount ? "translateX(0px)" : "translateX(-100px)",
            opacity: mount ? 1 : 0
          }}
          config={{
            duration: seconds * 1000,
          }}
        >
          {props => <animated.div style={props}>{children}</animated.div>}
        </Spring>
      )
    }}
  </TransitionState >
)


const LayoutLink = ({ to, children, className, ...props }) => (
  <TransitionLink to={to} exit={{ length: 0.5 }} entry={{ length: 0.5 }} className={`${className} ${linkStyle}`} {...props}>
    {children}
  </TransitionLink>
)

const Layout = ({ left, right }) => (
  <div className={styles.layout}>
    <div className={styles.left}>
      <LeftState>{left}</LeftState>
    </div>
    <div className={styles.right}>
      <RightState>{right}</RightState>
    </div>
  </div>
)

export { LayoutLink }
export default Layout

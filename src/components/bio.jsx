import React, { useContext } from "react"

import { Spring, animated } from "react-spring"
import styles from "../../src/scss/bio.module.scss"

import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import { LocaleContext } from "./wrapper"
import Posts from "./posts"

const PostsSpring = ({ children }) => (
  <TransitionState>
    {({ mount, transitionStatus }) => (
      <Spring
        to={{
          opacity: transitionStatus === "entered" ? 1 : 0,
          value: 100
        }}
      >
        {props => <animated.div style={props}>{children}</animated.div>}
      </Spring>
    )}
  </TransitionState>
)


const Bio = ({ to }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.about}>
      <a href={"https://github.com/rocketll"} className={styles.link}>github</a>
      <span className={styles.sep}></span>
      <TransitionLink
        to={to}
        className={styles.link}
      >
        <PostsSpring>
          {to === "/" ? "home" : to.split("/")}
        </PostsSpring>
      </TransitionLink>
    </div>
  )
}

export { PostsSpring }
export default Bio

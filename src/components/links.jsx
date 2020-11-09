import React, { useRef } from "react"
import styled from "styled-components"
import { useGesture } from "react-use-gesture"
import { useSpring, animated } from "react-spring"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"

const AniLink = ({ children, ...props }) => (
  <TransitionLink
    exit={{ length: 1 }}
    entry={{ length: 1, delay: 0.2 }}
    {...props}>
    {children}
  </TransitionLink>
)

const BaseLinkInternal = styled(AniLink)`
  text-decoration: none;
  color: inherit;
`

const BaseLinkExternal = styled.a`
  text-decoration: none;
  color: inherit;
`

const Link = ({ to, children, ...props }) => {
  const internal = /^\/(?!\/)/.test(to)
  return (
    internal ?
      <BaseLinkInternal to={to} {...props}>{children}</BaseLinkInternal> :
      <BaseLinkExternal href={to} {...props}>{children}</BaseLinkExternal>
  )
}

const StyledPhoto = styled(animated.div)`
  padding: 2rem;
  background: gray;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`

const PhotoLink = ({ to, children }) => {
  const [spring, set] = useSpring(() => ({
    x: 0, y: 0, opacity: 0, config: { mass: 1, tension: 170, friction: 20 }
  }))

  const hovering = useRef(false)

  const bind = useGesture({
    onHover: ({ active, xy: [x, y] }) => {
      set({ opacity: active ? 0.7 : 0 })
      if (active) {
        if (!hovering.current) {
          spring.x.set(x)
          spring.y.set(y)
        }
        hovering.current = true
      } else {
        set({ onRest: () => hovering.current = false })
      }
    },
    onMove: ({ xy: [x, y] }) => {
      set({ x, y })
    },
  })

  return (
    <>
      <Link to={to} {...bind()}>
        {children}
      </Link>
      <TransitionPortal>
        <StyledPhoto style={{ ...spring }}>weee</StyledPhoto>
      </TransitionPortal>
    </>
  )
}


export default Link
export { PhotoLink }
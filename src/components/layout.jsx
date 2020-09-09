import React from "react"
import styled from "styled-components"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { animated, Transition } from "react-spring"
import { springConfig } from "./configs"

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 10rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpointLarge}) {
    margin: 0 2rem;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    max-width: 35%;
    position: fixed;
  }
`

const Right = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 4rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    max-width: 65%;
    margin: 0 0 0 35% ;
  }
`

const LeftState = ({ children }) => (
  <TransitionState>
    {({ mount }) => {
      return (
        <Transition
          items={mount}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={springConfig}>
          {(props, show) =>
            show && <animated.div style={props}>{children}</animated.div>
          }
        </Transition>
      )
    }}
  </TransitionState >
)

const RightState = ({ children }) => (
  <TransitionState>
    {({ mount }) => {
      return (
        <Transition
          items={mount}
          from={{ opacity: 0, transform: "translate3D(0, -30rem, 0)" }}
          enter={{ opacity: 1, transform: "translate3D(0, 0, 0)" }}
          leave={{ opacity: 0, transform: "translate3D(0, 30rem, 0)" }}
          config={springConfig}>
          {(props, show) =>
            show && <animated.div style={props}>{children}</animated.div>
          }
        </Transition>
      )
    }}
  </TransitionState>
)

const AniLink = ({ children, ...props }) => (
  <TransitionLink
    exit={{ length: 1 }}
    entry={{ length: 1, delay: 0.2 }}
    {...props}>
    {children}
  </TransitionLink>
)

const Wrapper = ({ left, right }) => (
  <WrapperContainer>
    <LeftState>
      <Left>
        {left}
      </Left>
    </LeftState>
    <RightState>
      <Right>
        {right}
      </Right>
    </RightState>
  </WrapperContainer>
)

export { AniLink }
export default Wrapper

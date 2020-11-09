import React from "react"
import styled from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"
import { animated, Transition } from "react-spring"
import { springConfig } from "./configs"

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${({ theme }) => theme.breakpointLarge}) {
    margin: 0 2rem;
  }
`

const Left = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    width: ${({ theme }) => theme.leftRatio}%;
    max-width: ${({ theme }) => theme.leftRatio / 100 * theme.maxWidth}rem;
    position: fixed;
    padding: 0 4rem 0 10rem;
  }
`

const Right = styled(animated.main)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 4rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    width: ${({ theme }) => 100 - theme.leftRatio}%;
    max-width: ${({ theme }) => (100 - theme.leftRatio) / 100 * theme.maxWidth}rem;
    margin: 0 0 0 ${({ theme }) => theme.leftRatio}%;
    padding: 0 10rem 0 0;
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
            show && <Left style={props}>{children}</Left>
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
            show && <Right style={props}>{children}</Right>
          }
        </Transition>
      )
    }}
  </TransitionState>
)

const Wrapper = ({ left, right }) => (
  <WrapperContainer>
    <LeftState>
      {left}
    </LeftState>
    <RightState>
      {right}
    </RightState>
  </WrapperContainer>
)

export default Wrapper

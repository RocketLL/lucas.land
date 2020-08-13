import React, { useState } from "react"
import { useSprings, animated, to as interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"

import styles from "../scss/cards.module.scss"

const n = 6

const to = i => ({ x: 0, y: i * -5, scale: 1, rot: -5 + Math.random() * 10, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


const Card = () => {
  return (
    <>
      <h2 className={styles.name}>Lucas Lee</h2>
      <span className={styles.sub}>~/rocketll</span>
    </>
  )
}

const Cards = () => {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(n, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx, my], distance, direction: [xDir, yDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (1000 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === n) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className={styles.cards}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.card} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }}>
            <Card />
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Cards
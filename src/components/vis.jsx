import React, { useEffect } from "react"

import styles from "../../src/scss/vis.module.scss"

const rk4 = f => (y, x, dx) => {
  const k1 = dx * f(x, y)
  const k2 = dx * f(x + dx / 2.0, y + k1 / 2.0)
  const k3 = dx * f(x + dx / 2.0, y + k2 / 2.0)
  const k4 = dx * f(x + dx, y + k3)
  return y + (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0
}

const solveODE = (state, t, dt) => {
  const rho = 20
  const sigma = 10
  const beta = 8 / 3

  const x = state[0]
  const y = state[1]
  const z = state[2]
  const rk_x = rk4((t, x) => sigma * (y - x))
  const rk_y = rk4((t, y) => x * (rho - z) - y)
  const rk_z = rk4((t, z) => x * y - beta * z)
  return [rk_x(x, t, dt), rk_y(y, t, dt), rk_z(z, t, dt)]
}


const draw = () => {
  let state = [1.0, 1.0, 1.0]
  const dt = 0.01

  const canvas = document.getElementById("vis")
  const ctx = canvas.getContext("2d")
  const scale = 50

  for (let t = 0; t < 40; t += dt) {
    let nextState = solveODE(state, t, dt)
    const hue = 20 + state[2] * 2
    ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)"
    ctx.fillRect(1000 + state[0] * scale, 1000 + state[1] * scale, 4, 4)
    state = nextState
  }
}


const Vis = () => {
  useEffect(() => { draw() }, [])
  return <canvas id={"vis"} width={2000} height={2000} className={styles.vis} />
}

export default Vis

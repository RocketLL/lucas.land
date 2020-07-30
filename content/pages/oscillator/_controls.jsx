import React, { useContext, memo } from "react"

import { card, controls } from "./layout.module.scss"
import { OscillatorContext } from "./index"

const Control = ({ val, setVal }) => (
  <div>
    <input type="range" value={val} onChange={(event) => { setVal(event.target.value) }} min={0} max={2} step={0.01} />
    <input type="number" value={val} onChange={(event) => { setVal(event.target.value) }} />
  </div>
)

const Controls = () => {
  const { vars: { gamma, omega0, f0, omega }, setVars } = useContext(OscillatorContext)
  return (
    <div className={`${card} ${controls}`}>
      <Control val={gamma} setVal={(x) => setVars({ gamma: x, omega0: omega0, f0: f0, omega: omega })} />
      <Control val={omega0} setVal={(x) => setVars({ gamma: gamma, omega0: x, f0: f0, omega: omega })} />
      <Control val={f0} setVal={(x) => setVars({ gamma: gamma, omega0: omega0, f0: x, omega: omega })} />
      <Control val={omega} setVal={(x) => setVars({ gamma: gamma, omega0: omega0, f0: f0, omega: x })} />
    </div >
  )
}

export default memo(Controls)
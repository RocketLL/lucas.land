import Wrapper from "./wrapPageElement"
import { getDark, setDark } from "./src/components/initial"

export const wrapPageElement = Wrapper

export const onClientEntry = () => {
  setDark(getDark())
}

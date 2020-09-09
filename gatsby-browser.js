import Wrapper from "./wrapPageElement"

export const wrapPageElement = Wrapper

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
    console.log("IntersectionObserver is polyfilled")
  }
}

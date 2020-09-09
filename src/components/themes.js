const rem = size => `${size}rem`
const em = size => `${size}em`

const parseHex = (hex) => parseInt(hex, 16)

const rgba = (hex) => {
  const r = parseHex(hex.slice(1, 3))
  const g = parseHex(hex.slice(3, 5))
  const b = parseHex(hex.slice(5, 7))
  const a = parseHex(hex.slice(7, 9))

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const lightColors = {
  body: "#ffffff",
  text: "#222222",
  sub: "#dddddd",
}

const darkColors = {
  body: "#000000",
  text: "#dddddd",
  sub: "#333333",
}

const globalTheme = {
  maxWidth: 90,
  selectionBackground: rgba("#f3ff6bcc"),
  selectionText: "#222222",
  breakpointLarge: "70rem",
  breakpointMedium: "30rem"
}

const lightTheme = { ...lightColors, ...globalTheme }
const darkTheme = { ...darkColors, ...globalTheme }

export { lightTheme, darkTheme, rem, em, rgba }

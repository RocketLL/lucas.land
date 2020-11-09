const rem = size => `${size}rem`
const em = size => `${size}em`

const parseHex = (hex) => parseInt(hex, 16)

const rgba = (hex) => {
  const r = parseHex(hex.slice(1, 3))
  const g = parseHex(hex.slice(3, 5))
  const b = parseHex(hex.slice(5, 7))
  const a = parseHex(hex.slice(7, 9))

  return `rgba(${r}, ${g}, ${b}, ${a / 255})`
}

const lightColors = {
  body: "#ffffff",
  text: "#222222",
  sub: rgba("#00000077"),
  selectionBackground: rgba("#6bff7bcc"),
  selectionText: "#222222",
}

const darkColors = {
  body: "#000000",
  text: "#dddddd",
  sub: rgba("#ffffff77"),
  selectionBackground: rgba("#6bff7bcc"),
  selectionText: "#222222",
}

const globalTheme = {
  maxWidth: 90,
  breakpointLarge: "70rem",
  breakpointMedium: "30rem",
  leftRatio: 35
}

const lightTheme = { colors: { ...lightColors }, ...globalTheme }
const darkTheme = { colors: { ...darkColors }, ...globalTheme }

export { lightTheme, darkTheme, rem, em, rgba }

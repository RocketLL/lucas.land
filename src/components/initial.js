const getDark = () => {
  const storedPref = localStorage.getItem("dark")
  if (storedPref === "true" || "false") {
    return storedPref === "true"
  }

  const queryPref = matchMedia("(prefers-color-scheme: dark)").matches
  if (queryPref === true || false) {
    return queryPref
  }

  return false
}

const setDark = (val) => {
  document.body.setAttribute("theme", val ? "dark" : "light")
  localStorage.setItem("dark", val ? "true" : "false")
}

export { getDark, setDark }
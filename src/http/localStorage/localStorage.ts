import { DarkThemeEnum } from "../../pages/App/types"

export const getDarkTheme = () => {
  const theme = localStorage.getItem('darkTheme') as keyof typeof DarkThemeEnum
  return theme
}

export const setDarkTheme = (darkTheme: keyof typeof DarkThemeEnum) => {
  localStorage.setItem('darkTheme', darkTheme)
}
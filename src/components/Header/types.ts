import { DarkThemeEnum } from "../../pages/App/types"

export type HeaderProps = {
  DarkThemeProps: keyof typeof DarkThemeEnum
  setDarkTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}
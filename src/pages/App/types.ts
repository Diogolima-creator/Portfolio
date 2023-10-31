export type ContainerProps = {
  DarkTheme: keyof typeof DarkThemeEnum
}

export enum DarkThemeEnum {
  dark = 'dark',
  light = 'light'
}
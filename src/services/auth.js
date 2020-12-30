
export const isBrowser = () => typeof window !== "undefined"

const theme="gatbyPortfolioDevambroseTheme";

export const getTheme=()=>
    isBrowser() && (window.localStorage.getItem(theme) =="true" || window.localStorage.getItem(theme) ==true )
    ? (window.localStorage.getItem(theme))
    : false

export const setTheme = themes => window.localStorage.setItem(theme,themes)

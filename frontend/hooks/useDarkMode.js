// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('darkMode',false)
  
    return [isDark, setIsDark]
}
"use client"

import { useEffect, useState } from "react"

// S3 URLs for logos
const LIGHT_MODE_LOGO = "https://untrap-logos.s3.us-east-1.amazonaws.com/logo-lightmode.jpeg"
const DARK_MODE_LOGO = "https://untrap-logos.s3.us-east-1.amazonaws.com/logo-darkmode.jpeg"

interface UntrapLogoProps {
  forceLight?: boolean
}

export function UntrapLogo({ forceLight = false }: UntrapLogoProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // If forced to light mode, skip the dark mode check
    if (forceLight) {
      setIsDark(false)
      return
    }

    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const htmlElement = document.documentElement
      const hasDarkClass = htmlElement.classList.contains('dark')
      setIsDark(hasDarkClass)
    }

    // Initial check
    checkDarkMode()

    // Watch for changes to the dark mode class
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [forceLight])

  return (
    <div className="flex items-center">
      <img
        src={DARK_MODE_LOGO}
        alt="Untrap Logo"
        className="h-10 mr-2"
      />
      <span className="text-xl font-bold text-white">Untrap</span>
    </div>
  )
}


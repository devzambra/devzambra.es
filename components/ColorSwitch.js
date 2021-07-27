import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const COLOR_MODE = 'colorMode'
const ColorModes = {
  DARK: 'dark',
  LIGHT: 'light'
}

export default function ColorSwitch () {
  const [mode, setMode] = useState(ColorModes.LIGHT)

  useEffect(() => {
    const current = window.localStorage.getItem(COLOR_MODE)

    if (current) {
      setMode(current)
      saveMode(current)
    }
  }, [])

  const toggleMode = () => {
    setMode(m => {
      const newMode = m === ColorModes.DARK ? ColorModes.LIGHT : ColorModes.DARK

      saveMode(newMode)

      return newMode
    })
  }
  const saveMode = (newMode) => {
    document.querySelector('html').classList.remove(ColorModes.LIGHT)
    document.querySelector('html').classList.remove(ColorModes.DARK)
    document.querySelector('html').classList.add(newMode)
    window.localStorage.setItem(COLOR_MODE, newMode)
  }

  const getModeIcon = () => {
    return mode === ColorModes.DARK ? faSun : faMoon
  }

  return (
    <div>
      <button aria-label='color mode' onClick={toggleMode} className='bg-gray-200 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-20 p-3 rounded'>
        <FontAwesomeIcon icon={getModeIcon()} className='w-4 h-4 dark:text-white' />
      </button>
      <style jsx>{`
        button {
          outline: none;
        }  
      `}
      </style>
    </div>
  )
}
